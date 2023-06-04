import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { ParallaxProvider } from "react-scroll-parallax";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      </Head>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
