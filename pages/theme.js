import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  colors: {
    darkgray: 'rgb(30, 35, 41)',
    primary: 'white',
    secondary: '#ffc107',
  },
  fontSize: {
    title: '2em',
  },
};

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    background: ${darkTheme.colors.darkgray};
  }

  h1 {
    font-weight: 900;
  }

  h2 {
    font-weight: 600;
  }
`;
