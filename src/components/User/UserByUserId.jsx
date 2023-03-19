import useSWR from "swr";
import { fetcher } from "src/utls/fetcher";

export const UserByUserId = (props) => {

  const USERS_API = `https://jsonplaceholder.typicode.com/users/${props.id}`;
  const { data, error } = useSWR(
      props.id 
        ? USERS_API 
        : null
      ,fetcher
  );

  const isLoading = !data && !error;
  if (isLoading) {
    return <h2>ローディング中です</h2>
  }
   
  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>Created by {data.name}</div>
  );
}