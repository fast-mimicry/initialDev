import { Header } from 'src/components/Header';
import { Footer } from "src/components/Footer";
import { Posts as PostsComponent } from "src/components/Posts";
import Head from 'next/head';

//useCallbackについて
//コンポーネント内に関数を記述すると
//再レンダリング時に、関数も再生成されパフォーマンスがやや悪い
//これを解決するには
//コンポーネント内に「useCallback」を使用する

const Posts = (props) => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsComponent />
      <Footer />
    </div>
  )
};

export default Posts;