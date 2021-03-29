import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import User from '@/pages/user'

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

describe('User page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<User />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
