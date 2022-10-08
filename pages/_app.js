import NavbarHeader from '../components/NavbarHeader';
import NextNProgress from "nextjs-progressbar";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <NextNProgress
      color="#AE1EED"
      startPosition={0.3}
      stopDelayMs={200}
      height={4}
      showOnShallow={true}
      options={{ easing: "ease", speed: 500 }}
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
