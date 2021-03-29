import { GlobalStyles, theme } from '@/GlobalStyles'
import { ThemeProvider } from 'styled-components'

export default function App({ Component }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component />
    </ThemeProvider>
  )
}
