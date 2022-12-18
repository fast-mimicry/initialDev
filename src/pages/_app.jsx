import 'src/styles/globals.css'
import Head from "next/head"

//・global.cssを使うとき
//・indexjs,appjs両方に適用するとき
//など、ここ_appjsを使います

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
