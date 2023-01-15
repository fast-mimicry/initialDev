import { useEffect } from "react"

/**
 * bgColor管理useEffectのためのhooksです
 * @return なし
 */
export const useBgLightBlue = () => {

    useEffect(() => {
      //console.log(`マウント時:${count}`);
      document.body.style.backgroundColor="lightblue";
  
      //アンマウント時、関数を返します(ex.他ページ遷移時、色が戻ります)
      return () => {
        //console.log(`アンマウント時:${count}`);
        document.body.style.backgroundColor="";
  
      };
    },
    //下記配列に変数を格納すると、useEffectを再実行できる
    //例)「countに変更があったら、useEffectを再実行する」
    []);
  
  };
  