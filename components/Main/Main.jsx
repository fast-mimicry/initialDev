import classes from './Main.module.css'
import { Headline } from '../Headline/Headline'
import { Links } from '../Links/Links'


export function Main(props) {
  return (
     
      <main className={classes.main}>
        <Headline page={props.page}>
            <code className={classes.code}>page/{props.page}</code>
        </Headline>
        <Links />
      </main>

  )
}
