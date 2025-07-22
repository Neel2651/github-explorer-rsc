export type GitHubUser = {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
};

export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
};
