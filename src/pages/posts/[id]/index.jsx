import { Header } from "src/components/Header";
import { Post } from "src/components/Post";

/**
 * 親ページAPIリンクから遷移した子ページです
 */
const PostId = () => {  
  return (
    <div>
      <Header />
      <Post />
    </div>
  );  
};

export default PostId;