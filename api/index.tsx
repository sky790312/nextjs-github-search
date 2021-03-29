import { FetchGithubParams } from '@/api/schema'

export const baseUrl = 'https://api.github.com'

const doFetch = async url =>
  await fetch(String(url), {
    method: 'GET',
  }).then(response => {
    if (!response.ok) {
      throw response
    }

    return response.json()
  })
export const fetchGithubUsers = async (params: FetchGithubParams) => {
  const url = new URL(`${baseUrl}/search/users`)
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  return doFetch(url)
}

export const fetchGithubRepos = async (params: FetchGithubParams) => {
  const url = new URL(`${baseUrl}/search/repositories`)
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  return doFetch(url)
}

export const fetchGithubRepoContent = async (
  userName: string,
  repoName: string,
) => {
  const url = new URL(`${baseUrl}/repos/${userName}/${repoName}/contents`)

  return doFetch(url)
}

export const fetchGithubRepoFile = async (
  userName: string,
  repoName: string,
  fileName: string,
) => {
  const url = new URL(
    `${baseUrl}/repos/${userName}/${repoName}/contents/${fileName}`,
  )

  return doFetch(url)
}
