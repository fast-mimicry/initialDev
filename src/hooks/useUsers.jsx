import { fetcher } from "src/utls/fetcher";
import useSWR from "swr";

/**
 * CommentsのAPIリスト取得用のhooksです
 */
export const useUsers = () => {
  const USERS_API = `https://jsonplaceholder.typicode.com/users`;
  const { data, error } = useSWR(
        `${USERS_API}`
        ,fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length <= 0
  };
};