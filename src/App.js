import React, { useState } from "react";
import AddUserForm from "./components/User/AddUserForm";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";
import UserList from "./components/User/UserList";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const [users, setUsers] = useState([{ name: "Max", age: 28, id: "u1" }]);

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

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
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
    <div>
      <section id="user-form">
        <AddUserForm onAddUser={addUserHundler} />
      </section>
      <section id="users">
        <UserList items={users} />
      </section>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
