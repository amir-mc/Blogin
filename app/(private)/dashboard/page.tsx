'use client' // Required for client-side hooks
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard/news');
  }, [router]);

  return <div>Redirecting...</div>;
};

export default DashboardPage;