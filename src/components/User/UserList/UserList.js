import React from "react";
import SingleUser from "../UserOne/SingleUser";
import "./UserList.css";

const UserList = (props) => {
  return (
    <ul className="userList">
      {props.items.map((user) => (
        <SingleUser
          key={user.id}
          id={user.id}
          name={user.name}
          onDelete={props.onDeleteItem}
          age={user.age}
        >
          {user.name}, {user.age} years old
        </SingleUser>
      ))}
    </ul>
  );
};

export default UserList;
