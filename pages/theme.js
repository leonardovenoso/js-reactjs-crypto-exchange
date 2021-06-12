import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }

  h1 {
    font-weight: 900;
  }

  h2 {
    font-weight: 600;
  }
`;

export const Theme = {
  colors: {
    primary: '#fafafa',
  },
};
