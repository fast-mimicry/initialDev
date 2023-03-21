import classes from "src/components/Comment/Comment.module.css";
import Head from "next/head";
import { useComment } from "src/hooks/useComment";
import { PostByCommentId } from "src/components/Post/PostByCommentId";
 
/*
type Comments = {
  postId: String;   //Post.id
  id: Number;
  name: String;
  email: String;
  body: String;
}
*/

/**
 * 子ページを作成します
 */
export const Comment = (props) => {

  const CommentComponent = () => {
    //APIを実行
    const { data, error, isLoading, isEmpty } = useComment();

    if (isLoading) {
      return <h2>ローディング中です</h2>
    }

    if (error) {
      return <div>{error.message}</div>
    }

    if (isEmpty) {
      return <h2>No Comments Found.</h2>
    }

    return (
      <div>
        <h1>{data.body}</h1>
        <ul>
          <li>{data.name}</li>
          <li>{data.email}</li>
        </ul>
        <h2>元の記事</h2>
        <PostByCommentId id={data.id} />
      </div>
    );
  }

  return (
    <CommentComponent />
  );  
};
