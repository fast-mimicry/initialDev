import Head from 'next/head'
import { useCallback, useState } from 'react';
import classes from './Links.module.css'


//ロジックは親(Main())に持っていく。この後、Links()はLinks(props)で置き換える

export function Links({ items }) {


  return (
    <div className={classes.grid}>
    {items.map(item => {
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
