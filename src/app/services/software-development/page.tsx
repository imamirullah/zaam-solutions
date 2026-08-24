import { Metadata } from 'next';
import SoftwareClient from '@/components/clients/SoftwareClient';

export const metadata: Metadata = {
  title: 'Custom Software Development Services | Zaam Solutions',
  description: 'Web apps, mobile apps, SaaS platforms & e-commerce solutions built for scale. Explore our software development services.',
};

export default function SoftwareDevPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Custom Software Development',
    'provider': {
      '@type': 'Organization',
      'name': 'Zaam Solutions'
    },
    'description': 'Web apps, mobile apps, SaaS platforms & e-commerce solutions built for scale.'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How long does it take to build a custom website or app?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Typically between 3 to 12 weeks depending on the complexity of the project. Small websites or MVPs can be built and deployed in 3-4 weeks, while complex SaaS platforms or multi-feature mobile apps require 8-12 weeks of engineering, integration, and QA testing.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you offer post-launch support and maintenance?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. We provide flexible support retainers that include security updates, server monitoring, codebase backups, bug fixes, feature extensions, and performance monitoring.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can you work with our existing development team?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, we regularly collaborate with in-house product and engineering teams. We coordinate via Git, join daily standups, and establish clear API and component-level boundaries.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What\'s the difference between a web app and a website?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A website is primarily informational (static text and images for reading, like a brochure), whereas a web app is interactive and dynamic. Web apps require user authentication, database states, payment gateways, custom dashboards, and business logic.'
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
      <SoftwareClient />
    </>
  );
}
