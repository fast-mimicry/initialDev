import styles from '../styles/Home.module.css'
import { Footer } from '../Footer'
import { Header } from 'src/components/Header';

export function sampleTable() {
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

    </div>
  );
}
