import { useCallback, useMemo, useState } from 'react';

/**
 * counterのhooksです
 */
export const useCounter = () => {
    //counter表示非表示用
    const [isShow, setIsShow] = useState(true);
    const [count, setCount] = useState(1);
    //array[0]: count
    //array[1]: setCount

    /**
     * isShow変更時、doubleCountの再作成が行われてしまう
     * この為、countに変更があった場合のみ当関数が実行されるようにuseMemo()を使用
     */
    //const doubleCount = count * 2;
    const doubleCount = useMemo(() => {
      return count * 2;
    }, [count]);

    /**
     * counter部のボタンイベントです
     */
    const handleClick = useCallback(
      () => {
        if (count < 10) {
          //前回のcountに+1する
          setCount(prevCount => prevCount + 1);
        }
    }
    //第二引数は[]の場合であれば、記載しなくてもよい
    ,[count]);

   /**
    * テキストフィールドの表示・非表示ボタンのonClickイベントです
    */
    const handleDisplay = useCallback(
      () => {
        setIsShow(prevIsShow => !(prevIsShow || false))
    },[]);

    return { count, doubleCount, isShow, handleClick, handleDisplay }
};
