import React, { useState } from "react";
import CourseGoalList from "./CourseGoalList/CourseGoalList";
import CourseInput from "./CourseInput/CourseInput";
import Card from "../UI/Card/Card";
import CardA from "../UI/CardA/CardA";


const Goal = (props) => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: `${Math.random(1, 100)}` },
  ]);
  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };
  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };
  let contentGoal = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );
  if (courseGoals.length > 0) {
    contentGoal = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <>
      <Card>
        <CourseInput onAddGoal={addGoalHandler} />
      </Card>
      <CardA>{contentGoal}</CardA>
    </>
  );
};

export default Goal;
