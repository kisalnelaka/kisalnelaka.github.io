import { useState, useEffect } from 'react';
import axios from 'axios';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
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

export const useGitHubData = (username: string) => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [userRes, reposRes] = await Promise.all([
          axios.get(`https://api.github.com/users/${username}`),
          axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
        ]);

        setUser(userRes.data);
        
        // Filter out forks if desired, and sort by stars/date
        const filteredRepos = reposRes.data
          .filter((repo: any) => !repo.fork)
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        
        setRepos(filteredRepos);
      } catch (err) {
        setError('Failed to fetch GitHub data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  return { user, repos, loading, error };
};
