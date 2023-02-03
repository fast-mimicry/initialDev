import classes from './Links.module.css'

//ロジックは親(Main())に持っていく。この後、Links()はLinks(props)で置き換える

export const Links = (props) => {

  return (
    <div className={classes.grid}>
    {
      props.items.map(item => {
        return (
          <a key={item.href} href={item.href} className={classes.card}>
            <h3 className={classes.tittle}> {item.tittle}</h3>
            <p className={classes.description}>{item.description}</p>
          </a>
        );
      })
    }
  </div>
  );
};
