// app/layout.tsx

import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Blog',
  description: 'A simple blog built with Next.js, TypeScript, and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
       <html lang="fa" dir="rtl">
      <body className={inter.className}>
       
        <main className="">
          {children}
          <Toaster position="top-center" richColors />
        </main>
      </body>
    </html>

  );
}