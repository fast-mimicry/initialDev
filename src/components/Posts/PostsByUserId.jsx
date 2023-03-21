import Link from "next/link";
import classes from "src/components/Posts/Posts.module.css";
import { useExcelExporter } from "src/hooks/useExcelExporter";
import { usePostsByUserId } from "src/hooks/useFetchArray";
import CloudDownload from "@mui/icons-material/CloudDownload";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy_temp' },
  { icon: <CloudDownload />, name: 'ExportExcel' },
];

/**
 * 投稿一覧(Posts)を「UserId」でフィルタして表示します
 * APIを実行し、取得結果を一覧表示します( SWR を使用 )
 */
export const PostsByUserId = (props) => {  
  //APIを実行
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);
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
      <ol>
        {data ? data.slice(0, 15)
          .map(post => {
            return (
              /* 子ページのリンクを展開します */
              <li key={post.id} >
                <Link href={`/posts/${post.id}`} className={classes.apiList} >
                  <div>
                    {`${post.id}:${post.title}`}
                  </div>
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
