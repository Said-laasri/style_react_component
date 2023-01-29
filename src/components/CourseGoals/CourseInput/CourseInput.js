import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";

const FormControl = styled.div`
  margin: 0.5rem 0;
 
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "rgb(238, 228, 228)")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background-color: ${(props) =>
      props.invalid ? "rgb(218, 118, 105)" : "transparent"};
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background: #cf6464;
  }

  &.invalid label {
    color: red;
  }
`;

const CourseInput = (props) => {
  const [isValid, setIsValid] = useState(true);

  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setEnteredValue("");
    props.onAddGoal(enteredValue);
  };



  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>

        <input value={enteredValue} type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
