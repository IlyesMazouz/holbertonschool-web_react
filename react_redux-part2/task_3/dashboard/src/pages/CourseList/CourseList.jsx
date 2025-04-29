import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCourse, unSelectCourse } from '../../features/courses/coursesSlice';
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
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();

  const onChangeRow = (id, checked) => {
    if (checked) {
      dispatch(selectCourse(id));
    } else {
      dispatch(unSelectCourse(id));
    }
  };

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
              course={course}
              onChangeRow={onChangeRow}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default CourseList;
