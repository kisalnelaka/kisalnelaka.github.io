import { useState, useEffect } from 'react';
import { getMediumPost } from '@arifszn/blog-js';

export interface MediumArticle {
  title: string;
  link: string;
  publishedAt: Date;
  description: string;
  categories: string[];
  thumbnail: string;
}

export const useMediumArticles = (username: string, limit = 6) => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;

    getMediumPost({ user: username })
      .then((res) => {
        setArticles((res as MediumArticle[]).slice(0, limit));
      })
      .catch(() => {
        // Fail silently — static fallback handled in component
        setArticles([]);
      })
      .finally(() => setLoading(false));
  }, [username, limit]);

  return { articles, loading };
};
