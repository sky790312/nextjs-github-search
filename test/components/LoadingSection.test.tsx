import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { LoadingSection, Props } from '@/components/LoadingSection'

const props: Props = {
  shouldHide: false,
  isLoading: false,
  onClick: () => jest.fn(),
}

describe('LoadingSection component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      withProviders(<LoadingSection {...props} />),
      {},
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
