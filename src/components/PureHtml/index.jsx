import classes from "src/components/PureHtml/PureHtml.module.css";
import { Header } from 'src/components/Header';
import Head from "next/head";
import { useRef } from "react";

export const PureHtmlComponent = (props) => {

  //ボタン装飾テスト
  // const [isHovered, setIsHovered] = useState(false);
  // const buttonStyle = {
  //   backgroundColor: isHovered ? 'red' : 'blue',
  //   color: 'white'
  // };

  
  /**
   * 画面ロード時(マウント時)に実行するイベントを定義します
   * (通常はuseEffectを使います)
   */
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded!!!');

    /*
    //apiで画像を取得する
    const apiResponse = async() => {
        await fetch("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png")
            .then(res => res.blob()) // レスポンスからBlobオブジェクトを抽出する
            .then(blob => {
              // BlobオブジェクトからURLを作成する
              const imageURL = URL.createObjectURL(blob);
              
              // 画像を表示するためにimg要素を作成する
              const img = document.createElement('img');
              img.src = imageURL;
              document.body.appendChild(img); // img要素をDOMに追加する
            });
    }

    */
  });

  /**
   * ダウンロードボタンクリック時のイベントを定義します
   */
  const exportFile = async () => {

    //　操作対象の要素を取得
    //const notifsElm = useRef(null); //ReactのDom操作で今回はuseRefを使用しない(エラー出ない為)
    const notifsElm = document.querySelectorAll('[name="loading-notifs"]');
    
    // 表示する
    const getInitialized = () => {
      return new Promise((resolve) => {
        notifsElm.forEach(x => {
          x.style.visibility = 'visible';
        });
        return resolve();
      } )
    };
    await getInitialized();

    // 2秒後に非表示にする
    const getFadeOut = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          notifsElm.forEach(x => {
            x.style.visibility = 'hidden';
          });
          return resolve();
        }, 1000);
      } )
    };
    await getFadeOut();

  };

  // APIから取得するPOKEデータのサンプルです
  const POKE_DATA = [
    {id:25, name:"ピカチュウ", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"},
    {id:26, name:"ライチュウ", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"},

  ];

  return (
    <div>
      <Head>
        <title> HtmlOnly </title>

        {/* material iconをインポート*/}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

        {/* <link rel="stylesheet" type="text/css" href="xxx.css"> */}
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@materializecss/materialize@1.2.2/dist/css/materialize.min.css"></link> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/@materializecss/materialize@1.2.2/dist/js/materialize.min.js"></script> */}
      </Head>
      <Header />

        
      <div>
          
          {/*** ダウンロードボタン ***/}
          <div style={{ position:"absolute", bottom:"32px", right:"32px"}}>
            <button 
              class="waves-effect waves-light btn" 
              style={{"background-color": "lightgrey", padding:"10px", "border-radius":"100px", "text-align":"center", border:"lightgrey", "box-shadow": "0 3px 3px 0 rgba(0,0,0,.14), 0 1px 7px 0 rgba(0,0,0,.12), 0 3px 1px -1px rgba(0,0,0,.2)" }} 
              onMouseOver={() => {"this.style.background='#000000'"}}
              onClick={() => exportFile()}
            >
              <span class="material-icons" style={{"font-size": "64px"}}>cloud_download</span>
            </button>
          </div>

          {/* 横幅100vwでページを開始します(親から600pxで当ページを取得しているため拡張する) */}
          <div style={{ display:"relative"}} >
            <div style={{ position:"absolute", left:"0", width:"100vw","background-color": "#fafafa" }} >
            <h1 style={{ "margin-left":"16px"}}>
              <span>Accelerate Your Career:</span>
            </h1>
              {/* ベースのカード */}
              <div className={classes[`base-card`]}>

                <h2 style={{ "margin-left":"16px"}}>
                  <span>カードレイアウト</span>
                </h2>
                <section className={classes[`base-card__cardLayout`]}>
                  <div style={{ display:"grid","grid-template-columns": `repeat(auto-fill, minmax(350px, 1fr))`, gap:"16px" }} >
                    {/* カード */}
                    <div className={classes[`base-card__cardLayout__card`]}>
                      <div >
                        {/* 1_image */}
                        <div style={{ "width":"80px", "border-radius":"40px", 
                        "background-color": "#87cefa" }}
                        >
                          <img 
                            style={{ height:"80px", transform:"rotateZ(20deg)" }}
                            src={POKE_DATA.filter(x => x.id == 25)[0].url || ""}
                            alt=""
                          />
                        </div>
                        {/* 2_name */}
                        <span>{POKE_DATA.filter(x => x.id == 25)[0].name || ""}</span>
                        {/* 3_ボタン */}
                        <div style={{ padding:'8px' }} >
                          <span class="material-icons">thumb_up</span>
                        </div>
                      </div>
                    </div>

                    {/* カード */}
                    <div className={classes[`base-card__cardLayout__card`]}>
                      <div >
                        {/* 1_image */}
                        <div style={{ "width":"80px", height:"100%" ,"border-radius":"40px", "background-color":"#fa8072" }}
                        >
                          <img 
                            style={{ height:"80px", transform:"rotateZ(20deg)" }}
                            src={POKE_DATA.filter(x => x.id == 26)[0].url || ""}
                            alt=""
                          />
                        </div>
                        {/* 2_name */}
                        <div >
                          <span >{POKE_DATA.filter(x => x.id == 26)[0].name || ""}</span>
                        </div>
                        {/* 3_ボタン */}
                        <div style={{ padding:'8px' }} >
                          <span class="material-icons">thumb_up</span>
                        </div>
                      </div>
                    </div>

                    <div className={classes[`base-card__cardLayout__card`]}>
                      {/* 工事中 */}
                      <div style={{ position:"absolute", width:"calc(100% + 20px)",height:"calc(100% + 20px)", "z-index":"2", top:"-10px",left:"-10px", "background-color":"rgba(0,0,0,.5)" }}> 
                        <div style={{ "display":"flex", "justifyContent":"center", "align-items": "center", padding:"8px" }}>
                          <span className={classes[`text-2xl`]} style={{ "align-items": "center", color:"#fcfcfc", border:"1px solid #fcfcfc" }}>
                            工事中
                         </span>
                        </div>
                      </div>
                      {/* 本文 */}
                      <div><span>どく消し</span></div>
                    </div>

                    <div className={classes[`base-card__cardLayout__card`]}>
                      {/* 工事中 */}
                      <div style={{ position:"absolute", width:"calc(100% + 20px)", height:"calc(100% + 20px)", "z-index":"2", top:"-10px",left:"-10px", "background-color":"rgba(0,0,0,.5)" }}> 
                        <div style={{ "display":"flex", "justifyContent":"center", "align-items": "center", padding:"8px",height:"100%" }}>
                          <span className={classes[`text-2xl`]} style={{ "align-items": "center", color:"yellow" }}>
                            準備中
                         </span>
                        </div>
                      </div>
                      {/* 本文 */}
                      <div><span>おいしい水</span></div>
                    </div>

                    <div className={classes[`base-card__cardLayout__card`]}>
                      {/* 工事中 */}
                      <div style={{ position:"absolute", width:"calc(100% + 20px)", height:"calc(100% + 20px)", "z-index":"2", top:"-10px",left:"-10px", "background-color":"rgba(0,0,0,.5)" }}> 
                        <div style={{ "display":"flex", "justifyContent":"center", "align-items": "center", padding:"8px",height:"100%" }}>
                          <span className={classes[`text-2xl`]} style={{ "align-items": "center", color:"yellow" }}>
                            準備中
                         </span>
                        </div>
                      </div>
                      {/* 本文 */}
                      <div><span>モンスターボール。</span></div>
                    </div>

                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* 下部に表示するスナックバー */}
          <div name="loading-notifs" style={{ position:"absolute",left:"0",bottom: "0",visibility:"hidden", "z-index": "11" }} >
            <div className={classes.notifs}>
              
                <span className={classes[`notifs__text--head`]}>DownLoading...</span>
                <span className={classes[`notifs__text--body`]}>ダウンロード中</span>
            </div>
          </div>

          <div style={{ padding:'8px',"z-index": "10"  }} >
            <span class="material-icons">thumb_up</span>
          </div>


        </div>
      

    </div>
  );
}
