import React, { useState } from "react";
import AddUserForm from "./components/User/AddUserForm";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import UserList from "./components/User/UserList";
import Card from './components/UI/Card/Card';
import CardA from './components/UI/CardA/CardA';


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
      <Card>
        <AddUserForm onAddUser={addUserHundler} />
      </Card>
      <CardA>
        <UserList items={users} />
      </CardA>
      <Card>
        <CourseInput onAddGoal={addGoalHandler} />
      </Card>
      <CardA>
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </CardA>
    </div>
  );
};

export default App;
