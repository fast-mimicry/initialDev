import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

/**
 * 子ページ内にコメントを表示します
 * @param id postの項番(id)です
 */
export const CommentsByPostId = (props) => {
  const { data,error,isLoading, isEmpty} = useCommentsByPostId(props.id);

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
      {data ? data.slice(0, 15)
        .map(comment => {
          return (
            <li key={comment.id}>
              <Link href={`/comments/${comment.id}`}>
                <div>{`${comment.id}: ${comment.body}`}</div>
              </Link>
            </li>
          )
        })
        :null
      }
    </div>
  );
}