import styles from "src/styles/Home.module.css"
import { Header } from 'src/components/Header'
import { useBgColor } from "src/hooks/useBgColor";
import { Footer } from "src/components/Footer";
import { Posts } from "src/components/Posts";

import Link from "next/link";

//useCallbackについて
//コンポーネント内に関数を記述すると
//再レンダリング時に、関数も再生成されパフォーマンスがやや悪い
//これを解決するには
//コンポーネント内に「useCallback」を使用する

const Home = () => {
  return (
    <div className={styles.container}>
      {/* pageBody内のHeaderです */ }
      <Header />
        <div>test</div>
        <Link href={"/about"}>
          {`テストリンク`}
        </Link>
        
      <Posts />

      <Footer />
    </div>
  )
};

export default Home;