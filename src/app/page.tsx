import { Metadata } from 'next';
import HomeClient from '@/components/clients/HomeClient';

export const metadata: Metadata = {
  title: 'Software Development & Digital Marketing Agency',
  description: 'We build custom software, websites & apps, then market them with SEO, PPC & social media. One team, full-funnel growth. Get a free consultation.',
};

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Zaam Solutions',
    'url': 'https://zaamsolutions.com',
    'logo': 'https://zaamsolutions.com/logo.png',
    'description': 'We build custom software, websites & apps, then market them with SEO, PPC & social media. One team, full-funnel growth.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'San Francisco',
      'addressRegion': 'CA',
      'addressCountry': 'US'
    },
    'sameAs': [
      'https://github.com',
      'https://linkedin.com'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomeClient />
    </>
  );
}
