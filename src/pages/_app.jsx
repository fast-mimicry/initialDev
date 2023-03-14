import 'src/styles/globals.css'
import Head from "next/head"
import React from "react";
import { useCounter } from 'src/hooks/useCounter';
import { useInputArray } from 'src/hooks/useInputArray';
import { useBgColor } from 'src/hooks/useBgColor';
import { useExcelExporter } from 'src/hooks/useExcelExporter';

//・global.cssを使うとき
//・indexjs,appjs両方に適用するとき
//など、ここ_appjsを使います

const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  return (
    <div>
      {/*-- Head です --*/}
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*-- 各ページ を呼び出します --*/}
      {/* _app.jsxでは */}
      {/* Component にPropsとして渡したものは*/}
      {/* 各ページにPropsとして渡る          例：index.jsでprops.fooで123が取得できる*/}
      <Component 
        {...pageProps} 
        {...counter} 
        {...inputArray} 
      />
    </div>
  );
};

export default MyApp
