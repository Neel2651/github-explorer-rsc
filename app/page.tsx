'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/user/${username}`);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white p-4 text-black dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold">GitHub Repo Explorer</h1>
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="rounded border bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  );
}
