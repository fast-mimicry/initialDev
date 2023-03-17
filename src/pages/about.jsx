import styles from "src/components/Layout/Layout.module.css"
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { useBgColor } from "src/hooks/useBgColor";

const About = (props) => {
  // const { 
  //   count, doubleCount, isShow, handleClick, handleDisplay,
  //   text, array, handleChange, handleAdd
  //  } = props;
  useBgColor();

  return (
    <div>
      <Header />
      {/* reactはnullを返すと何も表示しない */}
      <div className={styles.counterViewer}>
        {props.isShow ?  
            <h1>{props.count}</h1>

          : null
        }
        <button href="/about" onClick={props.handleClick}>
          ボタン
        </button>
      </div>
      <div>
        <button onClick={props.handleDisplay}>
          切り替え
        </button>
      </div>

      <div className={styles.memoAdder}>
        <h3>メモ</h3>
        <div>
          <input type="text" value={props.text} onChange={props.handleChange} />
          <button onClick={props.handleAdd}>
            追加
          </button>
        </div>   
        <ul>
          {
            props.array.map(item => {
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

export default About;