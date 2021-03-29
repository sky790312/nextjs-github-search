/* eslint-disable @typescript-eslint/camelcase */
import styled from 'styled-components'
import { GithubRepoSchema } from '@/api/schema'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface Props {
  repo: GithubRepoSchema
}

export const Repo: React.FC<Props> = ({ repo }) => {
  const router = useRouter()
  const { userName } = router.query

  return (
    <Link href={`/repo?userName=${userName}&repoName=${repo.name}`}>
      <RepoWrapper>
        <div>
          <h3>{repo.name}</h3>
          <p>Star: {repo.stargazers_count}</p>
        </div>
      </RepoWrapper>
    </Link>
  )
}

const RepoWrapper = styled.div`
  margin: 10px;
  padding: 20px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.gray};

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 1140px) {
    display: flex;
    align-items: center;
  }
`
