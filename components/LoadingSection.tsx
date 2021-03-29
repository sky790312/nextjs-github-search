import React from 'react'
import styled from 'styled-components'
import { TextCenterContainer } from '@/GlobalStyles'
import { Spinner } from '@/components/Spinner'

export interface Props {
  shouldHide: boolean
  isLoading: boolean
  onClick: () => void
}

export const LoadingSection: React.FC<Props> = React.memo(
  ({ shouldHide, onClick, isLoading }) => {
    return (
      <LoadingSectionWrapper shouldHide={shouldHide}>
        {isLoading && <Spinner />}
        <Button disabled={isLoading} onClick={onClick}>
          Load More
        </Button>
      </LoadingSectionWrapper>
    )
  },
)

const LoadingSectionWrapper = styled(TextCenterContainer)<{
  shouldHide: boolean
}>`
  position: relative;
  padding: 10px;
  visibility: ${props => (props.shouldHide ? 'hidden' : 'visible')};
`

const Button = styled.button<{ disabled: boolean }>`
  opacity: ${props => (props.disabled ? '0.3' : '1')};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`
