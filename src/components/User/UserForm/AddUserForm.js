import React, { useRef, useState } from "react";
import ErrorModal from "../../UI/Error/ErroModal";
import Button from "../../UI/Button/Button";
import Wrapper from "../../Helpers/Wrapper";
import "./AddUserForm.css";

const AddUserForm = (props) => {
  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");
  const userName = useRef();
  const userAge = useRef();
  const { onAddUser } = props;
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState();

  // const userNameChangeHandler = (event) => {

  //   if (event.target.value.trim().length > 0) {
  //     setIsValid(true);
  //   }
  //   setUserName(event.target.value);
  // };
  // const userAgeChangeHandler = (event) => {
  //   if (event.target.value.trim().length > 0) {
  //     setIsValid(true);
  //   }

  //   setUserAge(event.target.value);
  // };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = userName.current.value;
    const enteredUserAge = userAge.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setIsValid(false);
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (enteredUserAge < 0) {
      setIsValid(false);
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    onAddUser(enteredName, enteredUserAge);
    // setUserAge("");
    // setUserName("");
    userName.current.value = "";
    userAge.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
          // value={userName}
          // onChange={userNameChangeHandler}
          ref={userName}
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
          // value={userAge}
          // onChange={userAgeChangeHandler}
          ref={userAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Wrapper>
  );
};

export default AddUserForm;
