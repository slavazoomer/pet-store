import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import '@/styles/globals.scss';

import { siteConfig } from '@/constant/config';

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
    <html lang='uk' className={inter.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
