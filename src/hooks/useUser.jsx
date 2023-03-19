import { useRouter } from "next/router";
import { fetcher } from "src/utls/fetcher";
import useSWR from "swr";

/**
 * APIリストから開く子ページ取得用のhooksです
 */
export const useUser = () => {
  const router = useRouter();

  const USER_API = `https://jsonplaceholder.typicode.com/users/${router.query.id}`;
  const { data, error } = useSWR(
    router.query.id
        ? `${USER_API}`
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
 