import { useRouter } from "next/router";
import { fetcher } from "src/utls/fetcher";
import useSWR from "swr";

/**
 * Comments親ページのAPIリスト取得の為のhooksです
 */
export const useComment = () => {
  const router = useRouter();

  const COMMENT_API = `https://jsonplaceholder.typicode.com/comments/${router.query.id}`;
  const { data, error } = useSWR(
    router.query.id 
        ? `${COMMENT_API}`
        : null
        ,fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length <= 0
  };
};