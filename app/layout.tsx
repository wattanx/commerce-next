import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from './_lib/SiteHeader';
import { ViewTransitions } from 'next-view-transitions';

export const runtime = 'edge';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Commerce with Next.js',
  description: 'E-Commerce with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>
          <SiteHeader />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
