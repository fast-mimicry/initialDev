import Link from "next/link";
import classes from "src/components/Posts/Posts.module.css";
import { useExcelExporter } from "src/hooks/useExcelExporter";
import { usePosts } from "src/hooks/usePosts";
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
    <div className={classes.postsContainer}>
      <h1 className={`${classes.textAlignLeft} ${classes.fontGradBlueEn}`}>
        <span >API</span>
        <span className={classes.fontGradBlueJp}> を実行</span>
      </h1>
      <ol>
        <div>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ 
            position: 'absolute',
            bottom: 24,
            right: 24,
            '& .MuiFab-primary': { 
              width: 70,
              height: 70,
              backgroundColor:"lightblue",
              '& .MuiSpeedDialIcon-icon': { fontSize: 28 },
              '&:hover': {backgroundColor:"#ffa500",opacity:0.5 }
            }
        }}
          icon={<SpeedDialIcon />}
        >
        {actions.map((action) => {
            return action.name === "ExportExcel" ?
              (<SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                sx={{width: 50, height: 50, backgroundColor: 'lightblue','&:hover': {backgroundColor:"#FFD27F"}}}
                onClick={() => exportExcel(data)}
              />)
              :
              (<SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                sx={{width: 50, height: 50, backgroundColor: 'lightblue','&:hover': {backgroundColor:"#FFD27F"}}}
              />)
        })}
        </SpeedDial>
        </div>
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
