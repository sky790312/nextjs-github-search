export interface FetchGithubParams {
  q: string
  sort?: string
  order?: string
  per_page?: number
  page?: number
}

export interface FetchGithubUserRespSchema {
  incomplete_results: boolean
  total_count: number
  items: GithubUserSchema[]
}

export interface FetchGithubRepoRespSchema {
  incomplete_results: boolean
  total_count: number
  items: GithubRepoSchema[]
}

export interface GithubUserSchema {
  id: number
  login: string
  avatar_url: string
}

export interface GithubRepoSchema {
  id: number
  name: string
  stargazers_count: number
}

export interface GithubFileSchema {
  sha: string
  name: string
}
