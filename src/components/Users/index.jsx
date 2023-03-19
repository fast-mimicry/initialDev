import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArray";

/**
 * 親ページを作成します
 * APIを実行し、取得結果を一覧表示します( SWR を使用 )
 */
export const Users = (props) => {

  //Users内の処理をComponent化します
  const UsersComponent = () => {
    const { data, error, isLoading, isEmpty } = useUsers();

    if (isLoading) {
      return <h2>ローディング中です</h2>
    }

    if (error) {
      return <h2>{error.message}</h2>
    }

    if (isEmpty) {
      return <h2>No Users Found.</h2>
    }

    return (
      <div>
        <h1>Usersを取得</h1>
        {data ? data.slice(0, 15)
          .map(data => {
            return (
              /* 子ページのリンクを展開します */
              <li key={data.id} >
                <Link href={`/users/${data.id}`}>
                  <div>
                    {`${data.id}:${data.name} (${data.email})`}
                  </div>
                </Link>
              </li>
            );
          })
          :null
        }
      </div>
    );
  }

  return (
    <UsersComponent />
  );
};
