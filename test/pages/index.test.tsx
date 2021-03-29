import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import Users from '@/pages/'

describe('Home Users page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<Users />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
