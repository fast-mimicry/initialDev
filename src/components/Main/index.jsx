import classes from 'src/components/Main/Main.module.css'
import { Headline } from 'src/components/Headline'
import { Links } from 'src/components/Links'
import { useCallback, useState } from 'react'

const ITEMS = [
  //1st
  {
    href: "https://nextjs.org/docs",
    tittle: "Documentation →",
    description:"Find in-depth information about Next.js features and API."
  },
  //2nd
  {
    href: "https://nextjs.org/learn",
    tittle: "Learn →",
    description:"Learn about Next.js in an interactive course with quizzes!"
  },
  //3rd
  {
    href: "https://github.com/vercel/next.js/tree/canary/examples",
    tittle: "Examples →",
    description:"Discover and deploy boilerplate example Next.js projects."
  },
  //4th
  // {
  //   href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
  //   tittle: "Deploy &rarr;",
  //   description:"Instantly deploy your Next.js site to a public URL with Vercel."
  // },
]

export const Main = (props) => {

  //Linkコンポーネントのロジックです
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    //前回のItemsをセット
    setItems(prevItems => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  },[]);

  return (
      <main className={classes.main}>

        {/* 子のHeadLineに対し、引数として(handleReduce)を渡す */}
        <Headline page={props.page} handleReduce={handleReduce} >
            <code className={classes.code}>{items.length}</code>
        </Headline>

        {/* ITEMS => setItems => items */}
        <Links items={items} />
      </main>
  );
};
