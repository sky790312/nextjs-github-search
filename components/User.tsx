/* eslint-disable @typescript-eslint/camelcase */
import styled from 'styled-components'
import { GithubUserSchema } from '@/api/schema'
import Link from 'next/link'

export interface Props {
  user: GithubUserSchema
}

export const User: React.FC<Props> = ({ user }) => {
  return (
    <Link href={`/user?userName=${user.login}`}>
      <UserWrapper>
        <StyledUserAvatar src={user.avatar_url} />
        <div>
          <h3>{user.login}</h3>
        </div>
      </UserWrapper>
    </Link>
  )
}

const UserWrapper = styled.div`
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

const StyledUserAvatar = styled.img`
  width: 100%;

  @media (min-width: 1140px) {
    width: 200px;
    margin-right: 20px;
  }
`
