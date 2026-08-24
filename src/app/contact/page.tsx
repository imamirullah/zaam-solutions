import { Metadata } from 'next';
import ContactClient from '@/components/clients/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Zaam Solutions',
  description: 'Get in touch for a free consultation on your software development or digital marketing project.',
};

export default function ContactPage() {
  return <ContactClient />;
}
