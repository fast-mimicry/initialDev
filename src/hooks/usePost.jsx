import { useRouter } from "next/router";
import { fetcher } from "src/utls/fetcher";
import useSWR from "swr";

/**
 * 子ページ用API実行の為のhooksです
 */
export const usePost = () => {
  const router = useRouter();

    //postをfetchする
    const POSTS_PROPS_API = `https://jsonplaceholder.typicode.com/posts/${router.query.id}`;
    const { data, error } = useSWR(
      //(router.query.id)が初期ロード時undefinedとなりエラーとなる
      //これを考慮し、undefinedをエスケープする(swr公式にも記載(条件付きfetch)がある模様)
        router.query.id 
          ? POSTS_PROPS_API 
          : null
        ,fetcher
     );

     return { 
      post,
      error,
      isLoading: !data && !error,
    };
 };