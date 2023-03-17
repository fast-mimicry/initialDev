import classes from "src/components/Post/Post.module.css";
import Head from "next/head";
import { usePost } from "src/hooks/usePost";
 
/**
 * 子ページを作成します
 */
export const Post = (props) => {
  //APIを実行
  const { post, user, error, isLoading } = usePost();
  
  if (isLoading) {
    return <h2>ローディング中です</h2>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div className={classes.postContainer}>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <h1>{`${post?.id}:${post?.title}`}</h1>
      <p>{post?.body}</p>
      {user?.name ? <div>Created by {user?.name}</div> : null}
    </div>
  );  
};
