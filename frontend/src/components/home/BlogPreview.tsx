import { BlogPost } from '@/types';
import Card from '../ui/Card';
import { formatMonthYear } from '@/lib/utils';
import Link from 'next/link';
import { Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogPreview({ posts }: { posts: BlogPost[] }) {
  if (!posts?.length) return null;

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Latest Writing</h2>
            <p className="text-muted text-lg max-w-2xl">
              I write about web development, system design, my internship experiences, 
              and tech topics I find fascinating.
            </p>
          </div>
          <Link href="/writing" className="text-accent hover:text-accent-glow font-medium inline-flex items-center transition-colors">
            Read all posts <ExternalLink size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/writing/${post.slug}`}>
                <Card className="h-full flex flex-col p-6 group cursor-pointer">
                  <div className="flex items-center text-xs text-muted mb-4 font-mono gap-4">
                    <span className="text-accent">{formatMonthYear(post.createdAt)}</span>
                    <span className="flex items-center"><Clock size={12} className="mr-1" /> {post.readTime} min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted mb-6 line-clamp-3 flex-1 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs font-medium text-foreground bg-surface border border-border px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
