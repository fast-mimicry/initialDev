import Link from 'next/link'
import classes from "./Header.module.css"

export function Header() {
  return (
      <header className={classes.header}>
        <Link href="/" className={classes.link}>
          Index
        </Link>
        <Link href="/about" className={classes.link}>
          About
        </Link>
      </header>
  );
}
