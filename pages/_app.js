import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyle } from '../theme';
import './_app.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
