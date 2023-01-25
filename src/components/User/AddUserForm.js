import React, { useState } from "react";
import Button from "../UI/Button/Button";
import "./AddUserForm.css";

const AddUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const userNameChangeHandler = (event) => {
    event.preventDefault();
    if(event.target.value.trim().length > 0){
        setIsValid(true);
    }
    setUserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    event.preventDefault();
    if(event.target.value.trim().length > 0){
        setIsValid(true);
    }

    setUserAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
        setIsValid(false);
      return <p className="errormessage">Please input your Name-Age</p>;
    }
    if (userAge < 0) {
        setIsValid(false);
      return <p className="errormessage">Please Input Real Age</p>;
    }

    props.onAddUser(userName, userAge);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label style={{ color: !isValid ? "red": "#000"}} htmlFor="username">Username</label>
      <input style={{ backgroundColor: !isValid ? "rgb(218, 118, 105)": "transparent"}} type="text" id="username" onChange={userNameChangeHandler} />
      <label style={{ color: !isValid ? "red": "#000"}} htmlFor="age">Age (Years)</label>
      <input style={{ backgroundColor: !isValid ? "rgb(218, 118, 105)": "transparent"}} type="number" id="age" onChange={userAgeChangeHandler} />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUserForm;
