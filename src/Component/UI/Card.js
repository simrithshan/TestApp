import './Card.css';
function Card(props){
    const classes='card '+ props.className;
    // our custom component cam now accept the other classes paased to in in ExpenceItems
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;