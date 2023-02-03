import styles from '../styles/Home.module.css'

export function sampleTable() {
  return (
    <div className={styles.container}>
      <table>
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
      </table>

    </div>
  );
}
