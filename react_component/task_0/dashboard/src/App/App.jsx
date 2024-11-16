import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import Login from "../Login/Login";
import "./App.css";

const coursesList = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

function App({ isLoggedIn = false, displayDrawer = false }) {
  return (
    <div className="App">
      <div className="notifications-wrapper">
        <Notifications displayDrawer={displayDrawer} />
      </div>

      <Header />

      <div className="app-body">
        {isLoggedIn ? <CourseList courses={coursesList} /> : <Login />}
      </div>

      <Footer />
    </div>
  );
}

export default App;
