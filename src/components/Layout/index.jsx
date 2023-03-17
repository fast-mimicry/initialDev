import classes from "src/components/Layout/Layout.module.css";

//_app.jsに上げて、全ページのルートコンテナに適用する
export const Layout = (props) => {
  return (
    <div className={classes.container}>
      {props.children}
    </div>
  )
}