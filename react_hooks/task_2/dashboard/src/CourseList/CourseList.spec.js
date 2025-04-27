import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

const sampleCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('CourseList', () => {
  it('renders 5 rows when passed a list of courses', () => {
    render(<CourseList courses={sampleCourses} />);
    expect(screen.getAllByRole('row').length).toBe(5);
  });

  it('renders 1 row when passed an empty array', () => {
    render(<CourseList courses={[]} />);
    expect(screen.getAllByText('No course available yet').length).toBe(1);
  });
});
