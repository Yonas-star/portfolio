'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function NotFound() {
  useEffect(() => {
    // Handle client-side redirects
    const path = window.location.pathname;
    
    const redirects = {
      '/github': 'https://github.com/yonas-star',
      '/linkedin': 'https://linkedin.com/in/yonas-kassahun-0b39a2313',
      '/website': 'https://www.thefstack.com',
    };
    
    if (redirects[path]) {
      window.location.href = redirects[path];
      return;
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">The page you're looking for doesn't exist.</p>
        <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
}