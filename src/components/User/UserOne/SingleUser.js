
const SingleUser = (props) => {
    return (
        <li>
            {props.children} {props.name}, {props.age} years old
        </li>
    )
}




export default SingleUser;