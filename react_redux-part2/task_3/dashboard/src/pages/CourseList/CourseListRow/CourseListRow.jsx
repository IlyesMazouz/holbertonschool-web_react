import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#deb5b545',
  },
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  th: {
    backgroundColor: '#deb5b545',
  },
});

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null, course = null, onChangeRow }) {
  const rowStyle = isHeader ? styles.header : styles.row;

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(rowStyle)}>
          <th className={css(styles.th)} colSpan="2">{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr className={css(rowStyle)}>
        <th className={css(styles.th)}>{textFirstCell}</th>
        <th className={css(styles.th)}>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr className={css(rowStyle)}>
      <td>
        <input
          type="checkbox"
          checked={course ? course.isSelected : false}
          onChange={(e) => onChangeRow(course.id, e.target.checked)}
        />
      </td>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

export default CourseListRow;
