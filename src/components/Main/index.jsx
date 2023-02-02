import classes from 'src/components/Main/Main.module.css'
import { Headline } from 'src/components/Headline/Headline'
import { Links } from 'src/components/Links/Links'
import { XlsxExporter } from "src/components/utl/ExcelExporter/XlsxExporter"
import { XlsxExporter3rd } from 'src/pages/api/XlsxExporter3rd'
//import { XlsxExporter2nd } from "src/pages/api/XlsxExporter2nd"

export function Main(props) {
  return (
     
      <main className={classes.main}>

        <XlsxExporter />
        {/* <XlsxExporter3rd /> */}

        <Headline page={props.page}>
            <code className={classes.code}>page/{props.page}</code>
        </Headline>
        <Links />
      </main>

  )
}
