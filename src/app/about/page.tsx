import { Metadata } from 'next';
import AboutClient from '@/components/clients/AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Zaam Solutions — Software & Marketing Experts',
  description: 'Meet the team behind Zaam Solutions. We combine development and marketing expertise to help brands build, launch, and grow online.',
};

export default function AboutPage() {
  return <AboutClient />;
}
