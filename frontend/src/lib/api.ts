const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001/api';

export async function fetchAPI<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export const api = {
  blog: {
    list: (page = 1) => fetchAPI<any>(`/blog?page=${page}`),
    featured: () => fetchAPI<any[]>('/blog/featured'),
    get: (slug: string) => fetchAPI<any>(`/blog/${slug}`),
  },
  projects: {
    list: () => fetchAPI<any[]>('/projects'),
    featured: () => fetchAPI<any[]>('/projects/featured'),
    get: (slug: string) => fetchAPI<any>(`/projects/${slug}`),
  },
  experience: {
    list: () => fetchAPI<any[]>('/experience'),
  },
  skills: {
    grouped: () => fetchAPI<Record<string, any[]>>('/skills'),
  },
  github: {
    stats: () => fetchAPI<any>('/github/stats'),
    repos: () => fetchAPI<any[]>('/github/repos'),
  },
  leetcode: {
    stats: () => fetchAPI<any>('/leetcode/stats'),
  },
  now: {
    get: () => fetchAPI<any>('/now'),
  },
  contact: {
    submit: async (data: any) => {
      console.log(`Submitting to: ${API_URL}/contact`);
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to submit contact form');
      return res.json();
    },
  },
};
