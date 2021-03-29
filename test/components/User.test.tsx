import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { fakeUser } from '@/test/mockData'
import { User, Props } from '@/components/User'

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
  user: fakeUser,
}

describe('User component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<User {...props} />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
