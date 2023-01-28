import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./AddUserForm.css";

const AddUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const userNameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setUserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
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
    setUserAge("");
    setUserName("");
    props.onAddUser(userName, userAge);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label style={{ color: !isValid ? "red" : "#000" }} htmlFor="username">
        Username
      </label>
      <input
        style={{
          backgroundColor: !isValid ? "rgb(218, 118, 105)" : "transparent",
        }}
        type="text"
        id="username"
        value={userName}
        onChange={userNameChangeHandler}
      />
      <label style={{ color: !isValid ? "red" : "#000" }} htmlFor="age">
        Age (Years)
      </label>
      <input
        style={{
          backgroundColor: !isValid ? "rgb(218, 118, 105)" : "transparent",
        }}
        type="number"
        id="age"
        value={userAge}
        onChange={userAgeChangeHandler}
      />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUserForm;
