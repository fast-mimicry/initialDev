import classes from "src/components/Post/Post.module.css";
import Head from "next/head";
import { usePost } from "src/hooks/usePost";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "src/utls/fetcher";
import Link from "next/link";
 
/*
type Posts = {
  userId: String;    //User.id
  id: Number;
  title: String;
  body: String;
}
type Props = {
  id: String;       //Comments.postId
}
*/

/**
 * Postsの明細ページを作成します
 */
export const PostByCommentId = (props) => {
  const { data, error, isLoading } = usePost(props.id);
  
  if (isLoading) {
    return <h2>ローディング中です</h2>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <Link href={`/posts/${data?.id}`}>
      <p>{`${data?.id}:${data?.title}`}</p>
    </Link>
  );  
};
