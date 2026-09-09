import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { REPOSITORY_CATALOG, RepositoryItem } from '../data/repositories';

export interface MergedProject extends RepositoryItem {
  id?: number;
  isLiveSynced?: boolean;
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubApiRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
  updated_at: string;
  fork: boolean;
  license?: { spdx_id?: string } | null;
}

export const useGitHubData = (username: string) => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [liveRepos, setLiveRepos] = useState<GitHubApiRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const [userRes, reposRes] = await Promise.all([
          axios.get<GitHubUser>(`https://api.github.com/users/${username}`),
          axios.get<GitHubApiRepo[]>(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
          ),
        ]);

        if (isMounted) {
          setUser(userRes.data);
          setLiveRepos(reposRes.data || []);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            'Failed to fetch GitHub live data; falling back to offline catalog',
          );
          console.warn(
            'GitHub API rate limited or unreachable, using repository catalog.',
            err,
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (username) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [username]);

  // Dynamically merge the repository catalog with live GitHub API data
  const allProjects = useMemo(() => {
    const liveRepoMap = new Map<string, GitHubApiRepo>();
    liveRepos.forEach((repo) => {
      liveRepoMap.set(repo.name.toLowerCase(), repo);
    });

    const catalogNames = new Set<string>();

    // 1. Process catalog items and enrich with live GitHub statistics
    const enrichedCatalog: MergedProject[] = REPOSITORY_CATALOG.map((item) => {
      const lowerName = item.name.toLowerCase();
      catalogNames.add(lowerName);
      const live = liveRepoMap.get(lowerName);

      if (live) {
        return {
          ...item,
          id: live.id,
          stars: live.stargazers_count ?? item.stars,
          forks: live.forks_count ?? item.forks,
          updated: live.updated_at ?? item.updated,
          url: live.html_url ?? item.url,
          demo: item.demo || live.homepage || undefined,
          isLiveSynced: true,
        };
      }

      return {
        ...item,
        isLiveSynced: false,
      };
    });

    // 2. Automatically incorporate any new public repositories from GitHub that aren't yet in the catalog
    const newlyDiscoveredRepos: MergedProject[] = [];
    liveRepos.forEach((repo) => {
      const lower = repo.name.toLowerCase();
      // Skip profile/portfolio repo meta
      if (['kisalnelaka', 'kisalnelaka.github.io'].includes(lower)) return;
      if (repo.fork) return;

      if (!catalogNames.has(lower)) {
        newlyDiscoveredRepos.push({
          name: repo.name,
          category: 'Software Engineering & Tools',
          url: repo.html_url,
          demo: repo.homepage || undefined,
          desc: repo.description || 'Open source engineering repository.',
          stack: repo.language ? [repo.language] : [],
          stars: repo.stargazers_count || 0,
          forks: repo.forks_count || 0,
          license: repo.license?.spdx_id || undefined,
          updated: repo.updated_at || new Date().toISOString(),
          featuredWeight: 50,
          id: repo.id,
          isLiveSynced: true,
        });
      }
    });

    return [...enrichedCatalog, ...newlyDiscoveredRepos];
  }, [liveRepos]);

  // Automated Selected Work: dynamically prioritizes recency, stars, and flagship significance
  const selectedProjects = useMemo(() => {
    return [...allProjects]
      .filter(
        (p) =>
          !['kisalnelaka', 'kisalnelaka.github.io'].includes(
            p.name.toLowerCase(),
          ),
      )
      .sort((a, b) => {
        // Calculate dynamic freshness score
        const timeA = new Date(a.updated).getTime();
        const timeB = new Date(b.updated).getTime();

        const weightA = a.featuredWeight ?? 50;
        const weightB = b.featuredWeight ?? 50;

        // Combined score: high weight + recency bonus + star bonus
        const scoreA = weightA * 1000 + a.stars * 500 + timeA / 10000000;
        const scoreB = weightB * 1000 + b.stars * 500 + timeB / 10000000;

        return scoreB - scoreA;
      });
  }, [allProjects]);

  return {
    user,
    allProjects,
    selectedProjects,
    loading,
    error,
  };
};
