import React from "react";
import CourseList from "../CourseList/CourseList";
import Login from "../Login/Login";
import "./App.css";

const coursesList = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

function App({ isLoggedIn = false }) {
  return (
    <div className="App">
      {isLoggedIn ? <CourseList courses={coursesList} /> : <Login />}
    </div>
  );
}

export default App;
