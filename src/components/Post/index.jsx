import classes from "src/components/Post/Post.module.css";
import Head from "next/head";
import { usePost } from "src/hooks/usePost";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "src/utls/fetcher";
 
/*
type Posts = {
  userId: String;    //User.id
  id: Number;
  title: String;
  body: String;
}
type Props = {
  id: String;
}
*/

/**
 * Postsの明細ページを作成します
 */
export const Post = (props) => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);
  
  if (isLoading) {
    return <h2>ローディング中です</h2>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div className={classes.postContainer}>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <h1>{`${data?.id}:${data?.title}`}</h1>
      <p>{data?.body}</p>

      <h2>投稿者</h2>
      <UserByUserId id={data.userId} />

      <h2>投稿に対するコメントを表示</h2>
      <CommentsByPostId id={data.id} />
    </div>
  );  
};
