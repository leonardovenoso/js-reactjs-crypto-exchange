import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  border: {
    radious: '6px',
  },
  colors: {
    black: 'black',
    darkgray: 'rgb(30, 35, 41)',
    darkgray2: '#333333',
    lightgray: 'lightgray',
    primary: 'white',
    secondary: '#ffc107',
  },
  containers: {
    margin: '2em',
  },
  fontSize: {
    title: '2em',
  },
};

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 16px;

    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }
  }

  body {
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    background: ${darkTheme.colors.darkgray};
  }

  h1 {
    font-weight: 900;
  }

  h2 {
    font-weight: 600;
  }

  .error {
    text-align: center;
    color: red;
  }

  .success {
    text-align: center;
    color: green;
    font-weight: bold;
  }
`;
