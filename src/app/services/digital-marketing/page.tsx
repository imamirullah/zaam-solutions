import { Metadata } from 'next';
import MarketingClient from '@/components/clients/MarketingClient';

export const metadata: Metadata = {
  title: 'Digital Marketing Services — SEO, PPC & Social Media | Zaam Solutions',
  description: 'Grow your traffic, leads, and sales with our SEO, paid ads, content, and social media marketing services.',
};

export default function DigitalMarketingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Digital Marketing',
    'provider': {
      '@type': 'Organization',
      'name': 'Zaam Solutions'
    },
    'description': 'Grow your traffic, leads, and sales with our SEO, paid ads, content, and social media marketing services.'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How long does SEO take to show results?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'SEO is a long-term compounding asset. While minor technical audit corrections can show index improvements in 2-4 weeks, high-volume organic search rankings and keyword acquisition curves typically require 3 to 6 months of active content publishing and search optimization.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What\'s the difference between SEO and PPC — which should I choose?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'PPC (Pay-Per-Click ads) provides instant traffic and lead capture the moment campaigns are launched, but stops immediately once budget is turned off. SEO (Search Engine Optimization) takes longer to build but constructs a permanent search presence that drives high-quality organic traffic for free. We recommend running PPC to capture active demand while simultaneously optimizing your site for long-term SEO.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you provide monthly reporting?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. We configure clear, automated GA4 dashboards linked to search engines. You receive a direct link to track impressions, conversions, target search query positions, and acquisition channels in real time, accompanied by a monthly summary call.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can you manage our social media content and posting?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Our social media team handles full-funnel content schedules: graphic asset designs, caption copywriting, hashtag researches, and organic calendar publications, plus community management to grow real organic relationships.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MarketingClient />
    </>
  );
}
