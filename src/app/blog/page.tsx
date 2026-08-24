import { Metadata } from 'next';
import BlogClient from '@/components/clients/BlogClient';

export const metadata: Metadata = {
  title: 'Blog & SEO Insights | Zaam Solutions',
  description: 'Deep-dives, checklists, and guides covering custom software architecture, autonomous AI agent pipelines, and technical growth marketing campaigns.',
};

export default function BlogPage() {
  return <BlogClient />;
}
