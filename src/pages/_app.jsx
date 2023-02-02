import 'src/styles/globals.css'
import Head from "next/head"
import React, {useState} from "react";
import { useCounter } from 'src/hooks/useCounter';
import { useInputArray } from 'src/hooks/useInputArray';
import { useBgLightBlue } from 'src/hooks/useBgLightBlue';

//・global.cssを使うとき
//・indexjs,appjs両方に適用するとき
//など、ここ_appjsを使います

function MyApp({ Component, pageProps }) {
  //const { count, isShow, handleClick, handleDisplay } = useCounter();
  //const { text, array, handleChange, handleAdd } = useInputArray();
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightBlue();

console.log("[app.js]");
console.log("Component");
console.log(Component);
console.log("pageProps");
console.log(pageProps);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* _app.jsxでは */}
      {/* Component にPropsとして渡したものは*/}
      {/* 各ページにPropsとして渡る          例：index.jsでprops.fooで123が取得できる*/}
      <Component {...pageProps} {...counter} {...inputArray} />
    </div>
  );
}

export default MyApp
