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

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
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
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
