import classes from 'src/components/Main/Main.module.css'
import { Headline } from 'src/components/Headline/Headline'
import { Links } from 'src/components/Links/Links'

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
