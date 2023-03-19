import Link from 'next/link';
import { useComments } from 'src/hooks/useComments';

/**
 * 親ページを作成します
 * APIを実行し、取得結果を一覧表示します( SWR を使用 )
 */
export const Comments = () => {

  //Comments内の処理をComponent化します
  const CommentsComponent = () => {
    const { data, error, isLoading, isEmpty } = useComments();

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
        <h1>Commentsを取得</h1>
        {data ? data.slice(0, 15)
          .map(comment => {
            return (
              <li>
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

  return (
    <CommentsComponent />
  );
};
