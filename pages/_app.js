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
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* PWA primary color */}

        <meta name="coverage" content="Worldwide" />
        <meta name="allow-search" content="yes" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/deals4sab_180x180"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/deals4sab_192x192"
        ></link>
      </Head>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
