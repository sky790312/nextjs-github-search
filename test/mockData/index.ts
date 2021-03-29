import { GithubUserSchema, GithubRepoSchema } from '@/api/schema'

export const fakeUser: GithubUserSchema = {
  id: 0,
  login: 'name',
  // eslint-disable-next-line @typescript-eslint/camelcase
  avatar_url: 'imgUrl',
}

export const fakeRepo: GithubRepoSchema = {
  id: 0,
  name: 'name',
  // eslint-disable-next-line @typescript-eslint/camelcase
  stargazers_count: 0,
}
