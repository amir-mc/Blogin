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
        <header className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">وبلاگ من</h1>
            <nav className="space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">خانه</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">درباره</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">تماس</a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}

          <Toaster position="top-center" richColors />
        </main>
      </body>
    </html>
  );
}