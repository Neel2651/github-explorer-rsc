import { GitHubUser, Repo } from '../types';
import RepoListClient from './Components/RepoListClient';

const GITUSERURL =  `https://api.github.com/users`

export default async function UserPage({
  params,
}: {
  params: { username: string };
}) {
  const [userRes, repoRes] = await Promise.all([
    fetch(`${GITUSERURL}/${params.username}`),
    fetch(`${GITUSERURL}/${params.username}/repos`, {
      next: { revalidate: 60 },
    }),
  ]);

  if (!userRes.ok) {
    return <div className="p-4">User not found</div>;
  }

  const user: GitHubUser = await userRes.json();
  const repos: Repo[] = repoRes.ok ? await repoRes.json() : [];

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-20 rounded-full"
        />
        <div>
          <h2 className="text-xl">{user.name}</h2>
          <p className="text-gray-600">@{user.login}</p>
          <p>{user.bio}</p>
        </div>
      </div>

      {/* Now render the client component with data */}
      <RepoListClient repos={repos} />
    </div>
  );
}
