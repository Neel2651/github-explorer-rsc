'use client';

import { useState } from 'react';
import { Repo } from '../../types';

export default function RepoFilter({ repos }: { repos: Repo[] }) {
  const [selectedLang, setSelectedLang] = useState('All');

  const languages = Array.from(
    new Set(repos.map((repo) => repo.language).filter(Boolean))
  );

  const filteredRepos =
    selectedLang === 'All'
      ? repos
      : repos.filter((repo) => repo.language === selectedLang);

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedLang('All')}
          className={`rounded px-3 py-1 ${
            selectedLang === 'All'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
          }`}
        >
          All
        </button>
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setSelectedLang(lang)}
            className={`rounded px-3 py-1 ${
              selectedLang === lang
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      <ul className="space-y-4">
        {filteredRepos.map((repo) => (
          <li
            key={repo.id}
            className="rounded border border-gray-300 bg-white p-4 text-black dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 dark:text-blue-400"
            >
              {repo.name}
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {repo.description || 'No description'}
            </p>
            <span className="rounded bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700">
              {repo.language || 'Unknown'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
