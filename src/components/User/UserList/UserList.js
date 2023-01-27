import React from 'react';
import SingleUser from '../UserOne/SingleUser';
import './UserList.css';

const UserList = (props) => {
    return (
        <ul className='userList'>
            {props.items.map((user) => (
                <SingleUser key={user.id} name={user.name} age={user.age} />
            ))}
        </ul>
    )

};


export default UserList;