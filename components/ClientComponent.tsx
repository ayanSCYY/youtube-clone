// ClientComponent.js
'use client';

import { useRouter } from 'next/navigation';

export default function ClientComponent() {
  const router = useRouter();

  const handleUploadClick = () => {
    router.push('/studio');
  };

  const handleWatchClick = () => {
    router.push('/landingpage');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <button
        type="button"
        onClick={handleUploadClick}
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      >
        Upload a video
      </button>
      <button
        type="button"
        onClick={handleWatchClick}
        className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
      >
        Watch a video
      </button>
    </div>
  );
}
