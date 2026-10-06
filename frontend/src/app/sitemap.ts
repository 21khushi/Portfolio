import { MetadataRoute } from 'next';
import { api } from '@/lib/api';

// This is the base URL of your deployed application
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://khushisikka.dev';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/about',
    '/projects',
    '/writing',
    '/experience',
    '/skills',
    '/achievements',
    '/now',
    '/contact',
    '/resume',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as any,
    priority: route === '' ? 1 : 0.8,
  }));

  try {
    // Dynamic project routes
    const projects = await api.projects.list();
    const projectRoutes = projects.map((project: any) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified: new Date(project.updatedAt || new Date()),
      changeFrequency: 'monthly' as any,
      priority: 0.7,
    }));
    routes.push(...projectRoutes);

    // Dynamic blog routes
    const blogData = await api.blog.list();
    const blogRoutes = blogData.posts.map((post: any) => ({
      url: `${SITE_URL}/writing/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.createdAt),
      changeFrequency: 'monthly' as any,
      priority: 0.7,
    }));
    routes.push(...blogRoutes);
  } catch (error) {
    console.error('Failed to generate dynamic sitemap routes:', error);
  }

  return routes;
}
