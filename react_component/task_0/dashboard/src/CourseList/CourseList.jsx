import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import './CourseList.css';


function CourseList({ listCourses = [] }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" />
        <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          listCourses.map(course => (
            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit.toString()} />
          ))
        ) : (
          <CourseListRow textFirstCell="No course available yet" colSpan="2" />
        )}
      </tbody>
    </table>
  );
}

CourseList.defaultProps = {
  listCourses: []
};

export default CourseList;
