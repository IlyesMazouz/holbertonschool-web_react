import React from 'react';

function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  return (
    <tr>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        textSecondCell === null ? (
          <td colSpan="2">{textFirstCell}</td>
        ) : (
          <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </>
        )
      )}
    </tr>
  );
}

export default CourseListRow;
