import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Container, ListContainer } from '@/GlobalStyles'
import { Repo } from '@/components/Repo'
import { LoadingSection } from '@/components/LoadingSection'
import { fetchGithubRepos } from '@/api'
import {
  FetchGithubParams,
  FetchGithubRepoRespSchema,
  GithubRepoSchema,
} from '@/api/schema'
import { DEFAULT_PER_PAGES } from '@/constants'
import { useRouter } from 'next/router'

const User = React.memo(
  (): JSX.Element => {
    const router = useRouter()
    const { userName } = router.query
    const [repos, setRepos] = useState<GithubRepoSchema[]>([])
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const perPages = DEFAULT_PER_PAGES

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true)
        try {
          const payload: FetchGithubParams = {
            q: `user:${userName}`,
            page,
            // eslint-disable-next-line @typescript-eslint/camelcase
            per_page: perPages,
          }
          const data: FetchGithubRepoRespSchema = await fetchGithubRepos(
            payload,
          )
          setRepos(prevRepos => [...prevRepos, ...data.items])
          const pages = Math.ceil(data.total_count / perPages)
          setTotalPages(pages)
          setIsLoading(false)
          return { data }
        } catch (error) {
          setIsLoading(false)
        }
      }

      if (!userName) {
        return
      }

      fetchData()
    }, [userName, page, perPages])

    const loadMore = () => {
      if (isLoading) {
        return
      }

      setPage(prevPage => prevPage + 1)
    }

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Container>
          <h1>{userName}</h1>
          <ListContainer>
            {repos.map(repo => (
              <Repo key={repo.id} repo={repo} />
            ))}
          </ListContainer>
          <LoadingSection
            shouldHide={page >= totalPages}
            isLoading={isLoading}
            onClick={loadMore}
          />
        </Container>
      </>
    )
  },
)

export default User
