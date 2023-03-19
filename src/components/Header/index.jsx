import Link from 'next/link'
import classes from "./Header.module.css"

const NAV_ITEMS = [
  {href: "/", label: "Index"},
  {href: "/posts", label: "Posts"},
  {href: "/users", label: "Users"},
  {href: "/comments", label: "Comments"},
  {href: "/about", label: "About"},
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map(item => {
        return (
        <li key={item.href} >
          <Link href={item.href} className={classes.link}>
            {item.label}
          </Link>
        </li>
       );
      })}
   </header>
  );
}
