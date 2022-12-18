import Head from 'next/head'
import classes from './Links.module.css'

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


export function Links() {
  return (
    <div className={classes.grid}>
    {ITEMS.map(item => {
      return (
        <a key={item.href} href={item.href} className={classes.card}>
          <h3 className={classes.tittle}> {item.tittle}</h3>
          <p className={classes.description}>{item.description}</p>
        </a>
      );
    })
    }
    


  </div>
  )
}
