import { useCallback, useEffect, useState } from "react";

/* ひとまずDevTools > Network > throttlingで3Gを選択すると、ローディング表示を確認できる */        
export const Posts = () => {

  //API実行用の変数です
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  //ローディング中の表示管理
  const [loading, setLoading] = useState(true);

  const getPosts = useCallback(async () => {
    //非同期はtry-catchでハンドリングした方がよいかもしれない
    try {

      //サンプルのAPIエンドポイントです
      const URL = `https://jsonplaceholder.typicode.com/posts`;
      const EmptyData_URL = `https://jsonplaceholder.typicode.com/postsData`;
      const Error_URL = `https://jsonplaceholder.typicode.com/postsDataEErrorrrrrrr`;

      const res = await fetch(
        `${URL}`
      );

      if (!res.ok) {
        console.log("res_is_rejected!!!");
        throw new Error("エラーが発生したため、データが取得できませんでした。");
      }
      const jsonObj = await res.json();
      setPosts(jsonObj);
    } catch (error) {
      setError(error);
    }
    //読み込み完了
    setLoading(false);
  },[])

  //getPost呼び出し
  useEffect(() => {
    getPosts();
  },[getPosts]);

  if (loading) {
    return <div>ローディング中です</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (posts.length <= 0) {
    return <div>データは空です</div>
  }

  return (
    <ol>
          {posts.slice(0, 10)
          .map(post => {
            return (
              <li key={post.id}>{`${post.id}:${post.title}`}</li>
            );
          })}
    </ol>
  );  
};
