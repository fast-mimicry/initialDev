import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Headline } from '../components/Headline'
import { Footer } from '../components/Footer'
import { Links } from '../components/Links'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Headline page="about"/>
        <Links />
      </main>

      <Footer />
    </div>
  );
}
