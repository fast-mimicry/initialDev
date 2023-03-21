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
export const useComments = () => {
  return useFetchArray(`${API_URI}/comments`);
}

//postsのAPIリストを取得します
export const usePosts = () => {
  return useFetchArray(`${API_URI}/posts`);
}

//usersのAPIリストを取得します
export const useUsers = () => {
  return useFetchArray(`${API_URI}/users`);
}

/**
 * 子ページ取得する為のhooksです
 * @param {*} id 
 * @return idで絞ったオブジェクトを返します
 */
export const useCommentsByPostsId = id => {
  return useFetchArray(id ? `${API_URI}/comments?postId=${id}` : null);
}

export const usePostsByUserId = id => {

  console.log(id ? `${API_URI}/posts?userId=${id}` : null);

  return useFetchArray(id ? `${API_URI}/posts?userId=${id}` : null);
}

export const useUsersByPostsId = id => {
  return useFetchArray(id ? `${API_URI}/users?postId=${id}` : null);
}
