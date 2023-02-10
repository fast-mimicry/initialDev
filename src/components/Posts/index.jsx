import Link from "next/link";
import classes from "src/components/Posts/Posts.module.css";
import { usePosts } from "src/hooks/usePosts";
 

/**
 * APIを実行します( SWR を使用 )
 */
export const Posts = (props) => {  

  //サンプルのAPIエンドポイントです
  const URL = `https://jsonplaceholder.typicode.com/posts`;
  const EmptyData_URL = `https://jsonplaceholder.typicode.com/posts?id=1000`;
  const Error_URL = `https://jsonplaceholder.typicode.com/postsDataEErrorrrrrrr`;

  const { data, error, isLoading, isEmpty } = usePosts(URL);
 
  console.log({data, error});

  if (isLoading) {
    return <div>ローディング中です</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (isEmpty) {
    return <div>データは空です</div>
  }

  //<li key={post.id}>{`${post.id}:${post.title}`}</li>

  return (
    <div>
      <h2 className={classes.textAlignLeft}>APIを実行</h2>
      <ol>
        {data.slice(0, 10)
        .map(post => {
          return (
            <li key={post.id}>
              <Link href={`/post/${post.id}`}>
                {`${post.id}:${post.title}`}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );  
};
