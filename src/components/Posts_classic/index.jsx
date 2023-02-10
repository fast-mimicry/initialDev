import classes from 'src/components/Posts/Posts_classic.module.css'
import { useCallback, useEffect, useState } from "react";

/**
 * クラシックなAPI実行用コンポーネントです
 */
export const Posts_classic = (props) => {

  // //API実行用の変数です
  // const [posts, setPosts] = useState([]);
  // const [error, setError] = useState(null);
  // //ローディング中の表示管理
  // const [loading, setLoading] = useState(true);

  /* ひとまずDevTools > Network > throttlingで3Gを選択すると、ローディング表示を確認できる */        

  //変数ごとにsetState()を設置すると3回レンダリングしてしまう。
  //各変数をsetState内で1つにまとめます -> 2回のレンダリング
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null
  });
  
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
      //読み込み完了
      //setPosts(jsonObj);
      setState(prevState => {
        return {
          ...prevState,
          data: jsonObj,
          loading: false
        }
      });
    } catch (error) {
      //エラー処理
      //setError(state.error);
      setState(prevState => {
        return {
          ...prevState,
          loading: false,
          error
        }
      });
    }
  },[state.data]);

  //getPost呼び出し
  useEffect(() => {
    getPosts();
  },[getPosts]);

  if (state.loading) {
    return <div>ローディング中です</div>
  }

  if (state.error) {
    return <div>{state.error.message}</div>
  }

  if (state.data.length <= 0) {
    return <div>データは空です</div>
  }

  return (
    <div>
      <h2 className={classes.textAlignLeft}>APIを実行</h2>
      <ol>
        {state.data.slice(0, 10)
        .map(post => {
          return (
            <li key={post.id}>{`${post.id}:${post.title}`}</li>
          );
        })}
      </ol>
    </div>
  );  
};
