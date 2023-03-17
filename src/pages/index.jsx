import styles from "src/styles/Home.module.css"
import { Header } from 'src/components/Header'
import Head from "next/head";

const Index = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title> Index Page </title>
      </Head>
      <Header />
      <h1>Accelerate Your Career:</h1>
      <p>Take the Next Step Now!</p>
    </div>
  );
}

export default Index;