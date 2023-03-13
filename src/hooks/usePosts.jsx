import { useRouter } from "next/router";
import { fetcher } from "src/utls/fetcher";
import useSWR from "swr";

/**
 * 親ページ用API実行の為のhooksです
 */
export const usePosts = () => {
  const router = useRouter();

    //postをfetchする
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
 