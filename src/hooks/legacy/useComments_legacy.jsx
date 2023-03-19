import { fetcher } from "src/utls/fetcher";
import useSWR from "swr";

/**
 * Comments親ページのAPIリスト取得の為のhooksです
 * (useFetchArrayにまとめたため現在は不要)
 */
export const useComments_legacy = () => {
  const COMMENTS_API = `https://jsonplaceholder.typicode.com/comments`;
  const { data, error } = useSWR(
        `${COMMENTS_API}`,
        fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length <= 0
  };
};