import React, { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import { Container, ListContainer } from '@/GlobalStyles'
import { SearchSection } from '@/components/SearchSection'
import { User } from '@/components/User'
import { LoadingSection } from '@/components/LoadingSection'
import { fetchGithubUsers } from '@/api'
import {
  FetchGithubParams,
  FetchGithubUserRespSchema,
  GithubUserSchema,
} from '@/api/schema'
import { DEFAULT_PER_PAGES, DEBOUNCE_DELAY_TIME } from '@/constants'
import { debounce } from '@/utils'

const Users = React.memo(
  (): JSX.Element => {
    const [users, setUsers] = useState<GithubUserSchema[]>([])
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(1)
    const [keyword, setKeyword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadMore, setIsLoadMore] = useState(false)

    const perPages = DEFAULT_PER_PAGES
    const debounceDelayTime = DEBOUNCE_DELAY_TIME

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true)
        try {
          const payload: FetchGithubParams = {
            q: keyword,
            page,
            // eslint-disable-next-line @typescript-eslint/camelcase
            per_page: perPages,
          }
          const data: FetchGithubUserRespSchema = await fetchGithubUsers(
            payload,
          )
          setUsers(prevUsers =>
            isLoadMore ? [...prevUsers, ...data.items] : data.items,
          )
          const pages = Math.ceil(data.total_count / perPages)
          setTotalPages(pages)
          setIsLoading(false)
          return { data }
        } catch (error) {
          setIsLoading(false)
        }
      }

      if (!keyword) {
        setUsers([])
        setPage(1)
        return
      }

      fetchData()
    }, [isLoadMore, keyword, page, perPages])

    const handleKeyword = useCallback(
      debounce(async (newKeyword: string) => {
        setIsLoadMore(false)
        setPage(1)
        setKeyword(newKeyword)
      }, debounceDelayTime),
      [],
    )

    const loadMore = () => {
      if (isLoading) {
        return
      }

      setIsLoadMore(true)
      setPage(prevPage => prevPage + 1)
    }

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Container>
          <SearchSection handleKeyword={handleKeyword} />
          <ListContainer>
            {users.map(user => (
              <User key={user.id} user={user} />
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

export default Users
