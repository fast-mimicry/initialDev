import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useRouter } from "next/router";
import Head from "next/head";

/**
 * APIリンクの子ページです
 */
const PostId = () => {  

  //router.query.idのidは
  //pages/post/[id].jsxの「[id]」という名称に対応している
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <tittle>Index Page</tittle>
      </Head>
        <Header />
        <h2>{`${router.query.id} の子ページです`}</h2>
        <div>test</div>
    </div>
  );  
};

export default PostId;