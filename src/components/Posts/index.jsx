import classes from 'src/components/Posts/Posts.module.css'
import { useCallback, useEffect, useReducer, useState } from "react";

//reducerの動作メモ
/**
* 1, initialStateをstateにセット
* 2, reducerは、(state, action)を受け取り、newStateを返す
*/

  //1,初期state
  const initialState = {
    data: [],         
    loading: true,    
    error: null       
  };
 
  //2,state, actionを受け取り、新しいnewStateを返す
  //const reducer = (state, action) => newState;
  const reducer = (state, action) => {
    switch (action.type) {
      case "end":{
        console.log("action.type:end");
        console.log(action);
        return {
          ...state,
          data: action.data,
          loading: false
        };
      }
      case "error":
        return {
          ...state,
          loading: false,
          error: action.error
        };
      default:
        //存在しないaction.typeである場合
        throw new Error("No Such Action Type");
    }
  };

/**
 * APIを実行します( Reducer を使用 )
 */
export const Posts = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  //APIエンドポイントを実行します
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
      // setState(prevState => {
      //   return {
      //     ...prevState,
      //     data: jsonObj,
      //     loading: false
      //   }
      // });
      dispatch({
        type:"end",
        data: jsonObj
      });
    } catch (error) {
      //エラー処理
      // setState(prevState => {
      //   return {
      //     ...prevState,
      //     loading: false,
      //     error
      //   }
      // });
      dispatch({
        type:"error",
        error
      });
    }
  },[]);

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
