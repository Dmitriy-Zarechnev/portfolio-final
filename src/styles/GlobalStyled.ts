import {createGlobalStyle} from 'styled-components'
import {theme} from './theme'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.primaryBg};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }

  }

  *::selection {
    color: ${theme.colors.contactColor};
    background-color: ${theme.colors.buttonBg};
  }

  *:focus-visible {
    outline: 2px solid ${theme.colors.borderColor};
  }

  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.primaryTextColor};
    line-height: 1.4;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${theme.colors.accent};
  }

  section {
    padding: 50px 0;
  }

  label {
    cursor: pointer;
  }
`