import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { Spinner } from '@/components/Spinner'

describe('Spinner component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<Spinner />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
