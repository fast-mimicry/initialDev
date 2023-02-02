import { useCallback, useState } from 'react';

/**
 * メモ機能のhooksです
 */
export const useInputArray = () => {

    //追加するテキスト
    const [text, setText] = useState("aaa");
    //追加されたテキストの一覧
    const [array, setArray] = useState(["(defalut)1","(defalut)2","(defalut)3"]);

  /**
   * テキストフィールドのonChangeイベントです
   */
  const handleChange = useCallback(e => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  },[]); 

  /**
   * 追加ボタンのonClickイベントです
   */
  const handleAdd = useCallback(() => {
    setArray(prevArray => {

      if(prevArray.includes(text)) {
        alert("同じ要素が既に存在します");
        return prevArray
      }
      const newArray = [
              ...prevArray,
               text
      ];
      return newArray
    });
  },[text]);

  console.log(text);

  return { text,  array, handleChange, handleAdd }
};
