import classes from "src/components/Layout/Layout.module.css";

//_app.jsに上げて、全ページのルートコンテナに適用する
export const Layout = (props) => {
  return (
    <div className="flex flex-col items-center px-2 min-h-screen mx-auto max-w-2xl">
      {props.children}
    </div>
  )
}

//以下をtailwindcssに置き換える
// padding: 0 0.5rem;
// text-align: center;
// margin: 0 auto;
// min-height: 100vh
// display:flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
