import React from 'react'
import { TextCenterContainer } from '@/GlobalStyles'

export interface Props {
  handleKeyword: (keyword) => void
}

export const SearchSection: React.FC<Props> = React.memo(
  ({ handleKeyword }) => {
    const onKeywordChange = e => handleKeyword(e.target.value)

    return (
      <TextCenterContainer>
        <h3>search github repo by keyowrd: </h3>
        <input type='text' onChange={onKeywordChange} />
      </TextCenterContainer>
    )
  },
)
