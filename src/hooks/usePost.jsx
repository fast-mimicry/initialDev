import { fetcher } from "src/utls/fetcher";
import useSWR from "swr";

/**
 * 子ページ用API実行の為のhooksです
 * @id Post.idです
 */
export const usePost = (id) => {
  
    //postをfetchする
    const POSTS_PROPS_API = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const { data, error } = useSWR(
      //(router.query.id)が初期ロード時undefinedとなりエラーとなる
      //これを考慮し、undefinedをエスケープする(swr公式にも記載(条件付きfetch)がある模様)
        id 
          ? POSTS_PROPS_API 
          : null
        ,fetcher
     );

     return { 
      data,
      error,
      isLoading: !data && !error,
    };
 };