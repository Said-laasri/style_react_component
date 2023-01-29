import UserList from "./UserList/UserList";
import Card from "../UI/Card/Card";
import CardA from "../UI/CardA/CardA";
import React, { useState } from "react";
import AddUserForm from "./UserForm/AddUserForm";

const User = (props) => {
    const [users, setUsers] = useState([
        { name: "Max", age: 28, id: `${Math.random()}t` },
      ]);
    
      const deleteUserHandler = (userId) => {
        setUsers((prevUsers) => {
          const updatedUsers = prevUsers.filter((user) => user.id !== userId);
          return updatedUsers;
        });
      };
      let contentUser = (
        <p style={{ textAlign: "center" }}>No users found. Maybe add one?</p>
      );
    
      if (users.length > 0) {
        contentUser = <UserList items={users} onDeleteItem={deleteUserHandler} />;
      }
    
      const addUserHundler = (userName, userAge) => {
        setUsers((prevUsers) => {
          const updatedUsers = [...prevUsers];
          updatedUsers.unshift({
            name: userName,
            age: userAge,
            id: Math.random().toString(),
          });
          return updatedUsers;
        });
      };
  return (
    <>
      <Card>
        <AddUserForm onAddUser={addUserHundler} />
      </Card>
      <CardA>{contentUser}</CardA>
    </>
  );
};

export default User;
