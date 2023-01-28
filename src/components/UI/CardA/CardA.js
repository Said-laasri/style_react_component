import classes from './CardA.module.css';


const CardA = props => {
    return (
        <div className={classes.cardA}>{props.children}</div>
    )
}

export default CardA;