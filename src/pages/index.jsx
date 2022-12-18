import styles from '../styles/Home.module.css'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Main } from '../components/Main'
import { useCallback, useEffect } from 'react';

//コンポーネント内に関数を記述すると
//再レンダリング時に、関数も再生成されパフォーマンスがやや悪い

//これを解決するには
//コンポーネント内に「useCallback」を使用する


export default function Home() {

  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    console.log("マウント時の処理です");
    document.body.style.backgroundColor="lightblue";

    //アンマウント時、関数を返します(ex.他ページ遷移時、色が戻ります)
    return () => {
      console.log("アンマウント時の処理です");
      document.body.style.backgroundColor="";

    };
  },
  //下記配列に変数を格納すると、useEffectを再実行できる
  []);


  return (
    <div className={styles.container}>
      <Header />
      <a href="/about" onClick={handleClick}>
          ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  )
}
