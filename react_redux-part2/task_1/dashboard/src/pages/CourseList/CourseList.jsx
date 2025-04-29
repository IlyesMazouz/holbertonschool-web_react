import React from 'react';
import { useSelector } from 'react-redux';
import CourseListRow from './CourseListRow/CourseListRow';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    border: '1px solid #ccc',
    marginTop: '20px',
    borderCollapse: 'collapse',
  },
});

const CourseList = () => {
  const courses = useSelector((state) => state.courses);

  const courseArray = Array.isArray(courses) ? courses : [];

  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {courseArray.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ) : (
          courseArray.map((course) => (
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
