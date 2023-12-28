import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

import '@/styles/globals.scss';

import { cn } from '@/lib/utils';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { siteConfig } from '@/constant/config';

const stapel = localFont({
  src: './fonts/Stapel-SemiExpandedMedium.woff2',
  variable: '--font-stapel',
});

const inter = Inter({
  subsets: ['cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },

  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='uk' className={cn(inter.className, stapel.variable)}>
      <body className='flex h-full min-h-screen flex-col items-center'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
