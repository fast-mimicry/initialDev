import styles from "../styles/Home.module.css"
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { useBgColor } from "src/hooks/useBgColor";


export default function About(props) {
  console.log(props);

  const { 
    count, doubleCount, isShow, handleClick, handleDisplay,
    text, array, handleChange, handleAdd
   } = props;
  useBgColor();

  return (
    <div className={styles.container}>
      <Header />
      {/* reactはnullを返すと何も表示しない */}
      <div className={styles.counterViewer}>
        {isShow ?  
            <h1>{count}</h1>

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

      <Main page="about" />     
      <Footer />
    </div>
  );
}

