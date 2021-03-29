import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import Repo from '@/pages/repo'

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

describe('Repo page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<Repo />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
