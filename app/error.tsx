'use client'
import { Home, RefreshCw, AlertTriangle, Mail } from 'lucide-react';
import Link from 'next/link';

type ErrorPageProps = {
  statusCode?: number;
  title?: string;
  message?: string;
};

export default function ErrorPage({
  statusCode = 404,
  title = 'Page Not Found',
  message = "Oops! The page you're looking for doesn't exist or has been moved.",
}: ErrorPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.01]">
        <div className="p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-red-100 dark:bg-red-900/30 mb-6">
            <AlertTriangle className="h-12 w-12 text-red-500 dark:text-red-400" />
          </div>
          
          <div className="mb-6">
            <span className="text-6xl font-bold text-gray-800 dark:text-white">
              {statusCode}
            </span>
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white">
              {title}
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              {message}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="flex items-center justify-center px-5 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-center px-5 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-200"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh
            </button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Still need help?
            </p>
            <Link
              href="mailto:support@example.com"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
            >
              <Mail className="w-4 h-4 mr-1.5" />
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}