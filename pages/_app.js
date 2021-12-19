import '../styles/globals.css'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
