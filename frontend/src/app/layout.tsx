import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ThemeProvider from '@/components/layout/ThemeProvider';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Khushi Sikka — Full-Stack SDE | React · NestJS · Node.js · Live UK Clients',
    template: '%s | Khushi Sikka',
  },
  description:
    'Full-Stack SDE with 1+ year shipping live production apps for UK clients — gym SaaS, AI motion tracking, fintech escrow — using React.js, Next.js, Node.js, and NestJS. Offered Full-Time SDE at CreateBytes. CGPA 9.06.',
  keywords: [
    'Khushi Sikka',
    'Full Stack Engineer',
    'Software Development Engineer',
    'React',
    'NestJS',
    'Node.js',
    'Next.js',
    'PostgreSQL',
    'MongoDB',
    'CreateBytes',
    'Portfolio',
    'UK Client Delivery',
    'Luxe Fitness',
    'Krigat AI',
    'RedPill Verify',
  ],
  openGraph: {
    title: 'Khushi Sikka — Full-Stack SDE | UK Live Client Delivery',
    description:
      'Full-Stack SDE with 1+ year shipping live production apps for UK clients. Offered Full-Time SDE at CreateBytes. CGPA 9.06.',
    url: '/',
    siteName: 'Khushi Sikka Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Khushi Sikka Portfolio' }],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khushi Sikka — Full-Stack SDE',
    description: '1+ year UK live client delivery · Full-Time SDE Offer · CGPA 9.06 · Chitkara University 2026',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Khushi Sikka',
    jobTitle: 'Software Development Engineer',
    worksFor: { '@type': 'Organization', name: 'CreateBytes' },
    alumniOf: 'Chitkara University, Punjab',
    email: 'gunnusikka21@gmail.com',
    sameAs: [
      'https://github.com/21khushi',
      'https://www.linkedin.com/in/khushi-sikka-bb8997262/',
      'https://leetcode.com/Khushi_2004',
    ],
    knowsAbout: [
      'React.js',
      'Next.js',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'MongoDB',
      'JavaScript',
      'TypeScript',
      'Python',
      'Java',
      'Selenium',
      'System Design',
    ],
    description:
      'Full-Stack SDE with 1+ year shipping live production applications for UK clients. Offered Full-Time SDE at CreateBytes. CGPA 9.06 at Chitkara University.',
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-bg text-text-primary selection:bg-accent/30 selection:text-white min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
