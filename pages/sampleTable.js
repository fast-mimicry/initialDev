import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer/Footer'
import { Main } from '../components/Main/Main'

export default function Home() {
  return (
    <div className={styles.container}>

      <Table>
        <thead>
        <tr>
          <th>No</th>
          <th>name</th>
          <th>check</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>田中</td>
            <td>check</td>  
          </tr> 
        </tbody>
      </Table>

      <Footer />
    </div>
  );
}
