import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Container, ListContainer } from '@/GlobalStyles'
import { Spinner } from '@/components/Spinner'
import { fetchGithubRepoContent, fetchGithubRepoFile } from '@/api'
import { GithubFileSchema } from '@/api/schema'
import { DEFAULT_PER_PAGES } from '@/constants'
import { useRouter } from 'next/router'
import { isClient } from '@/utils'
import { markdown } from 'markdown'

export const Repo = React.memo(
  (): JSX.Element => {
    const router = useRouter()
    const { userName, repoName } = router.query
    const [files, setFiles] = useState<GithubFileSchema[]>([])
    const [readmeContent, setReadmeContent] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const perPages = DEFAULT_PER_PAGES

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true)
        try {
          const data: GithubFileSchema[] = await fetchGithubRepoContent(
            String(userName),
            String(repoName),
          )
          setFiles(data)
          const fileName = 'README.md'
          const file = await fetchGithubRepoFile(
            String(userName),
            String(repoName),
            fileName,
          )
          setReadmeContent(file.content)
          setIsLoading(false)
          return { data }
        } catch (error) {
          setIsLoading(false)
        }
      }

      fetchData()
    }, [userName, repoName, perPages])

    /**
     * just for demo, can control in server side.
     */
    const showReadmeContent = () =>
      isClient()
        ? readmeContent && markdown.toHTML(window.atob(readmeContent))
        : 'README.md'

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Container>
          <h1>{repoName}</h1>
          {isLoading && <Spinner />}
          <ListContainer>
            {files.map(file => (
              <p key={file.sha}>{file.name}</p>
            ))}
          </ListContainer>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: showReadmeContent() }} />
        </Container>
      </>
    )
  },
)

export default Repo
