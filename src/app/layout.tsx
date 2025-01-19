import { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Bebas_Neue, IBM_Plex_Sans } from 'next/font/google';

import '@/app/globals.css';
import { Toaster } from '@/components/ui/toaster';

const bebasNeue = Bebas_Neue({
  weight: '400',
  variable: '--bebas-neue',
  subsets: ['latin'],
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BookWise',
  description:
    'BookWise is a book borrowing university library management solution.',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
