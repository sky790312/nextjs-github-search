import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media (min-width: 1140px) {
    width: 1140px;
  }
`

export const TextCenterContainer = styled.div`
  text-align: center;
`

export const ListContainer = styled.div`
  position: relative;
  padding: 50px;
`

export const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    gray: '#afafaf',
  },
}

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    line-height: 1.4;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
