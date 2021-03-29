import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { SearchSection, Props } from '@/components/SearchSection'

const props: Props = {
  handleKeyword: () => jest.fn(),
}

describe('SearchSection component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      withProviders(<SearchSection {...props} />),
      {},
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
