import type { Metadata } from 'next';
import { Geist, Geist_Mono, Montserrat } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import CustomCursor from '@/components/CustomCursor';
import BorderFrame from '@/components/BorderFrame';
import SiteTitle from '@/components/SiteTitle/SiteTitle';

const grandSlang = localFont({
  src: [
    {
      path: '../../public/fonts/GrandSlang-Roman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GrandSlang-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${montserrat.variable}`}
      >
        <header className="fixed top-0 right-0 p-4 bg-transparent z-50">
          <SiteTitle />
        </header>
        <CustomCursor />
        <BorderFrame>{children}</BorderFrame>
      </body>
    </html>
  );
}
