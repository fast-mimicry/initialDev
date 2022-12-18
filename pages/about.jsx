import styles from '../styles/Home.module.css'

import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Main } from '../components/Main/Main'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
