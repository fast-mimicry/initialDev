import styles from "../styles/Home.module.css"
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

//useCallbackについて
//コンポーネント内に関数を記述すると
//再レンダリング時に、関数も再生成されパフォーマンスがやや悪い
//これを解決するには
//コンポーネント内に「useCallback」を使用する


export default function Home(props) {
  const { 
    count, doubleCount, isShow, handleClick, handleDisplay,
    text, array, handleChange, handleAdd
   } = props;
  useBgLightBlue();


  return (
    <div className={styles.container}>
      <Header />
      {/* reactはnullを返すと何も表示しない */}
      <div className={styles.counterViewer}>
        {isShow ?  
            <h1>{doubleCount}</h1>

          : null
        }
        <button href="/about" onClick={handleClick}>
          ボタン
        </button>
      </div>
      <div>
        <button onClick={handleDisplay}>
          切り替え
        </button>
      </div>

      <div className={styles.memoAdder}>
        <h3>メモ</h3>
        <div>
          <input type="text" value={text} onChange={handleChange} />
          <button onClick={handleAdd}>
            追加
          </button>
        </div>   
        <ul>
          {
            array.map(item => {
                return (
                  //コンポーネントをぐるぐる表示するときは、keyが必要
                  <li key={item}>
                    {item}
                  </li>
                );
              })
          }
        </ul>
      </div>

      <Main page="index" />
      <Footer />
    </div>
  )
}
