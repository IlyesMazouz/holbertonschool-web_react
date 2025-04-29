import React, { useState, useEffect } from 'react';
import CourseListRow from './CourseListRow/CourseListRow';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';

const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    border: '1px solid #ccc',
    marginTop: '20px',
    borderCollapse: 'collapse',
  },
  thtd: {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'left',
  },
});

const CourseList = ({ userAuthStatus = true }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      if (userAuthStatus) {
        try {
          const response = await axios.get('/courses.json');
          setCourses(response.data);
        } catch (error) {
          if (process.env.NODE_ENV === 'development') {
            console.error('Error fetching courses:', error);
          }
        }
      }
    };

    fetchCourses();
  }, [userAuthStatus]);

  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {courses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ) : (
          courses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default CourseList;
