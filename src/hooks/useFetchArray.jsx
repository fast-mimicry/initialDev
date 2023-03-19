import { fetcher } from "src/utls/fetcher";
import useSWR from "swr";

/**
 * Comments親ページのAPIリスト取得の為のhooksです
 */
export const useFetchArray = url => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length <= 0
  };
};

/**
 * (useFetchArrayを利用して)
 * APIリストを取得する為のhooksです
 */
const API_URI = "https://jsonplaceholder.typicode.com";

//commentsのAPIリストを取得します
export const useComments = url => {
  return useFetchArray(`${API_URI}/comments`);
}

//postsのAPIリストを取得します
export const usePosts = url => {
  return useFetchArray(`${API_URI}/posts`);
}

//usersのAPIリストを取得します
export const useUsers = url => {
  return useFetchArray(`${API_URI}/users`);
}