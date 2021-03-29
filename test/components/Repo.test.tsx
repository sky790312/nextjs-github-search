import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { fakeRepo } from '@/test/mockData'
import { Repo, Props } from '@/components/Repo'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

const props: Props = {
  repo: fakeRepo,
}

describe('Repo component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<Repo {...props} />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
