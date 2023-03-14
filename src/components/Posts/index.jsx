import Link from "next/link";
import classes from "src/components/Posts/Posts.module.css";
import { useExcelExporter } from "src/hooks/useExcelExporter";
import { usePosts } from "src/hooks/usePosts";
 
/**
 * 親ページを作成します
 * APIを実行し、取得結果を一覧表示します( SWR を使用 )
 */
export const Posts = () => {  

  //APIを実行
  const { data, error, isLoading, isEmpty } = usePosts();
  const { exportExcel } = useExcelExporter();

  if (isLoading) {
    return <h2>ローディング中です</h2>
  }

  if (error) {
    return <h2>{error.message}</h2>
  }

  if (isEmpty) {
    return <h2>データは空です</h2>
  }

  return (
    <div>
      <h2 className={classes.textAlignLeft}>APIを実行</h2>
      <ol>
        <div>
          <button onClick={ data => exportExcel(data)}>
            ExcelExport
          </button>
        </div>
        {data ? data.slice(0, 15)
          .map(post => {
            return (
              /* 子ページのリンクを展開します */
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  {`${post.id}:${post.title}`}
                </Link>
              </li>
            );
          })
          :null
        }
      </ol>
    </div>
  );  
};
