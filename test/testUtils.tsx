import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/GlobalStyles'

export function withProviders(component): JSX.Element {
  return <ThemeProvider theme={theme}>{component}</ThemeProvider>
}

export const customRender = (ui, options = {}) => render(ui, { ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
