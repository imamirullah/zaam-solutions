import type { Metadata } from 'next';
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Zaam Solutions | AI, Software & Growth Marketing',
  description: 'A premium, modern technology agency specializing in custom software development, autonomous AI automation systems, and high-ROI growth marketing campaign setups.',
  keywords: ['software development', 'AI agents', 'AI automation', 'digital marketing', 'SEO', 'SaaS', 'nextjs development'],
  openGraph: {
    title: 'Zaam Solutions | Premium Technology & Digital Marketing Agency',
    description: 'We build high-performance software, custom AI bots, and data-driven digital growth funnels.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zaam Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaam Solutions | AI, Software & Growth Marketing',
    description: 'We build high-performance software, custom AI bots, and data-driven digital growth funnels.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-[#030308] text-slate-100 flex flex-col`}
      >
        {/* Sticky Header Nav */}
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Sticky Tab Bar for Mobile */}
        <BottomNav />
      </body>
    </html>
  );
}
