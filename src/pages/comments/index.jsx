import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { Comments as CommentsComponent } from "src/components/Comments";
import Head from "next/head";

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <CommentsComponent />
      <Footer />
    </div>
  )
};

export default Comments;