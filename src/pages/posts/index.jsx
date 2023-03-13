import styles from "src/styles/Home.module.css"
import { Header } from 'src/components/Header'
import { Footer } from "src/components/Footer";
import { Posts } from "src/components/Posts";

//useCallbackについて
//コンポーネント内に関数を記述すると
//再レンダリング時に、関数も再生成されパフォーマンスがやや悪い
//これを解決するには
//コンポーネント内に「useCallback」を使用する

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <button onClick={props.handleClick_ExcelExporter}>
        ExcelExport
      </button>
      <Posts />
      <Footer />
    </div>
  )
};

export default Home;