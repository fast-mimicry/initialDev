import { Header } from "src/components/Header";
import { Comment } from "src/components/Comment";

/**
 * 親ページAPIリンクから遷移した子ページです
 */
const CommentId = () => {  
  return (
    <div>
      <Header />
      <Comment />
    </div>
  );  
};

export default CommentId;