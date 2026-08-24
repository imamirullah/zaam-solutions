import { Metadata } from 'next';
import PortfolioClient from '@/components/clients/PortfolioClient';

export const metadata: Metadata = {
  title: 'Our Work | Case Studies | Zaam Solutions',
  description: 'See how we\'ve helped businesses build software and grow their digital presence — real projects, real results.',
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
