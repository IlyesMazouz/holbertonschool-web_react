import React from 'react';

const headerStyle = {
  backgroundColor: '#deb5b545', 
};

const rowStyle = {
  backgroundColor: '#f5f5f5ab', 
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const style = isHeader ? headerStyle : rowStyle;

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={style}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    }
    return (
      <tr style={style}>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr style={style}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;
