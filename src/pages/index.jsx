import styles from "../styles/Home.module.css"
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Main } from '../components/Main'
import { useCallback, useEffect, useState } from 'react';

//コンポーネント内に関数を記述すると
//再レンダリング時に、関数も再生成されパフォーマンスがやや悪い

//これを解決するには
//コンポーネント内に「useCallback」を使用する


export default function Home() {
  const [count, setCount] = useState(1)
  //array[0]: count
  //array[1]: setCount

  const handleClick = useCallback(
    e => {
      console.log(`count:${count}`);
      if (count < 10) {
        setCount(count => count + 1)

      }

  },
  //第二引数は[]の場合であれば、記載しなくてもよい
  //
  [count]);

  useEffect(() => {
    console.log(`マウント時:${count}`);
    document.body.style.backgroundColor="lightblue";

    //アンマウント時、関数を返します(ex.他ページ遷移時、色が戻ります)
    return () => {
      console.log(`アンマウント時:${count}`);
      document.body.style.backgroundColor="";

    };
  },
  //下記配列に変数を格納すると、useEffectを再実行できる
  //例)「countに変更があったら、useEffectを再実行する」
  [count]);


  return (
    <div className={styles.container}>
      <Header />
      <h1>{count}</h1>
      <button href="/about" onClick={handleClick}>
          ボタン
      </button>
      <Main page="index" />
      <Footer />
    </div>
  )
}
