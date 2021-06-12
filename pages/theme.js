import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato&family=Rubik&display=swap');

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    font-family: 'Lato', sans-serif;
  }
`;

export const Theme = {
  colors: {
    primary: "#fafafa",
  },
};

