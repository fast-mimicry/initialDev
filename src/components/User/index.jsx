import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";
 
/*
type User = {
  id: Number;
  name: String;
  username: String;
  email: String;
  address: {};
  phone: String;
  website: String;
  company: String;
}
*/


/**
 * ユーザー情報(Users)を表示します
 */
export const User = (props) => {

  
  const UserComponent = () => {
    //APIを実行
    const { data, error, isLoading, isEmpty } = useUser();

    if (isLoading) {
      return <h2>ローディング中です</h2>
    }

    if (error) {
      return <div>{error.message}</div>
    }

    if (isEmpty) {
      return <h2>No Users Found.</h2>
    }

    return (
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error.message}</div>
        ) : (
          <div>
            <h1>{data.name}</h1>
            <ul>
              <li>{data?.email}</li>
              <li>{data?.username}</li>
              <li>{data?.address.city}</li>
              <li>{data?.phone}</li>
              <li>{data?.website}</li>
              <li>{data?.company.name}</li>
            </ul>
            <h2>ユーザーが行った投稿一覧</h2>
            <PostsByUserId id={data.id} />            
          </div>
        )}
      </div>
    );
  }

  return (
    <UserComponent />
  );  
};
