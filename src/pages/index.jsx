import styles from "src/styles/Home.module.css"
import { Header } from 'src/components/Header'
import { useBgColor } from "src/hooks/useBgColor";
import { Footer } from "src/components/Footer";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

//useCallbackについて
//コンポーネント内に関数を記述すると
//再レンダリング時に、関数も再生成されパフォーマンスがやや悪い
//これを解決するには
//コンポーネント内に「useCallback」を使用する

const Home = (props) => {
  useBgColor();

  //API実行用の変数です
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    //サンプルのAPIを取得します
    const URL = `https://jsonplaceholder.typicode.com/posts`;
    const res = await fetch(`${URL}`);

    //const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonString = await res.json();
    console.log(jsonString);

    setPosts(jsonString);

  },[])

  //getPost呼び出し
  useEffect(() => {
    getPosts();
  },[getPosts]);

  return (
    <div className={styles.container}>
      {/* pageBody内のHeaderです */ }
      <Header />
        <p>test</p>
        <Link href={"/about"}>
          {`テストリンク`}
        </Link>
        
        {(posts.length > 0) ? 
        (
          <ol>
            {posts.slice(0, 10)
            .map(post => {
              return (
                <li key={post.id}>{`${post.id}:${post.title}`}</li>
              );
            })}
          </ol>
        ) : null }

      <Footer />
    </div>
  )
}

export default Home;