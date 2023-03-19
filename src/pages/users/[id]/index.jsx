import { Header } from "src/components/Header";
import { User } from "src/components/User";

/**
 * 親ページAPIリンクから遷移した子ページです
 */
const UserId = () => {  
  return (
    <div>
      <Header />
      <User />
    </div>
  );  
};

export default UserId;