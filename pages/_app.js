import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle} from './theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
