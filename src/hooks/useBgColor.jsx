import { useRouter } from "next/router";
import { useEffect, useMemo } from "react"

/**
 * bgColor管理useEffectのためのhooksです
 * @return なし
 */
export const useBgColor = () => {

  //pathnameにルートが入っている
  const router = useRouter();

  //遷移したら色を変更する関数
  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/" :{
        return "lightblue";
      }
      case "/about" : {
        return "beige";
      }
      default: {
        break;
      }
    }
  }, [router.pathname]);

    useEffect(() => {
      //console.log(`マウント時:${count}`);
      document.body.style.backgroundColor = bgColor;
  
      //アンマウント時、関数を返します(ex.他ページ遷移時、色が戻ります)
      return () => {
        //console.log(`アンマウント時:${count}`);
        document.body.style.backgroundColor="";
  
      };
    },
    //下記配列に変数を格納すると、useEffectを再実行できる
    //例)「countに変更があったら、useEffectを再実行する」
    [bgColor]);
  
  };
  