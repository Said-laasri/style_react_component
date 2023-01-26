import classes from './CardA.module.css';


const CardA = props => {
    return (
        <div class={classes.cardA}>{props.children}</div>
    )
}

export default CardA;