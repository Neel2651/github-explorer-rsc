'use client';

import { Repo } from '../../types';
import RepoFilter from './RepoFilter';

export default function RepoListClient({ repos }: { repos: Repo[] }) {
  if (!repos || repos.length === 0) {
    return (
      <div className="text-gray-700 dark:text-gray-300">
        This user has no public repositories.
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Public Repositories
      </h2>
      <RepoFilter repos={repos} />
    </div>
  );
}
