import Link from 'next/link'
import classes from "./Header.module.css"

const NAV_ITEMS = [
  {href: "/", label: "Index"},
  {href: "/about", label: "About"}
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {/* Linkをここに書きます */}
      {NAV_ITEMS.map(item => {
        <Link key={item.href} href={item.href} className={classes.link}>
          {item.label}
        </Link>
       })
      }
   </header>
  );
}
