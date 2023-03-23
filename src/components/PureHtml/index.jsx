import classes from "src/components/PureHtml/PureHtml.module.css";
import { Header } from 'src/components/Header';
import Head from "next/head";

export const PureHtmlComponent = () => {

  return (
    <div>
      <Head>
        <title> HtmlOnly </title>

        {/* material iconをインポート*/}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

        {/* <link rel="stylesheet" type="text/css" href="xxx.css"> */}
      </Head>
      <Header />

      <body>
        
        <div>
          <p>Accelerate Your Career:</p>
                rootContainer1
          <p style={{"background-color": "blue", padding:"10px", "border-radius":"100px", "text-align":"center"}}>
            <span class="material-icons" style={{"font-size": "64px"}}>cloud_download</span>
          </p>
          {/* 横幅100vwでページを開始します */}
          <div style={{ display:"relative"}} >
            <div style={{ position:"absolute", left:"0", width:"100vw" }} >


              {/* card-area */}
              <div className={classes.cardtest}>
                <div style={{ display:"grid","grid-template-columns": `repeat(auto-fill, minmax(350px, 1fr))`, gap:"16px" }} >
                  {/* カード */}
                  <div className={classes.cardtest}>
                      <span>aaaa1</span>
                  </div>

                  <div className={classes.cardtest}>
                      <span>aaaa1</span>
                  </div>

                  <div className={classes.cardtest}>
                      <span>aaaa1</span>
                  </div>

                  <div className={classes.cardtest}>
                      <span>aaaa1</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* 下部に表示するスナックバー */}
          <div style={{ position:"absolute",left:"0",bottom: "0" }} >
            <div className={classes.notifs}>
              <ol>
                <li><span>Down Loading</span></li>
                <li><span classNames={classes[`text-6xl`]}>Down Loading</span></li>
              </ol>
            </div>
          </div>

          <div style={{ padding:'8px' }} >
            <span class="material-icons">thumb_up</span>
          </div>


        </div>
      </body>

    </div>
  );
}