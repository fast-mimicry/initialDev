import styles from "src/styles/Home.module.css"
import { Header } from 'src/components/Header'
import { useBgColor } from "src/hooks/useBgColor";
import { Footer } from "src/components/Footer";

//useCallbackについて
//コンポーネント内に関数を記述すると
//再レンダリング時に、関数も再生成されパフォーマンスがやや悪い
//これを解決するには
//コンポーネント内に「useCallback」を使用する


const Home = (props) => {
  useBgColor();

  return (
    <div className={styles.container}>
      <Header />
      test
      <Footer />
    </div>
  )
}

export default Home;