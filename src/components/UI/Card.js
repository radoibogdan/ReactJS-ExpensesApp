import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;
  // props.children = content between opening and closing Card Tags in ExpenseItem for ex
  return (
    <div className={classes}>{props.children}</div>
  );
}

export default Card;