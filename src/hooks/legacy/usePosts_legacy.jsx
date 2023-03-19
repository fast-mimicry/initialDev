import { fetcher } from "src/utls/fetcher";
import useSWR from "swr";

/**
 * 親ページ用API実行の為のhooksです
 * (useFetchArrayにまとめたため現在は不要)
 */
export const usePosts = () => {
  const POSTS_API = `https://jsonplaceholder.typicode.com/posts`;
  const { data, error } = useSWR(
        `${POSTS_API}`
        ,fetcher
  );

  return { 
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length <= 0
  };
};
 