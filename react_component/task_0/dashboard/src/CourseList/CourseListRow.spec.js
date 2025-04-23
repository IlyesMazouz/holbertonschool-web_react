import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one th with colspan = 2 when isHeader is true and textSecondCell is null', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Header" />);
    const th = screen.getByText('Header');
    expect(th).toBeInTheDocument();
    expect(th.tagName).toBe('TH');
    expect(th).toHaveAttribute('colspan', '2');
  });

  it('renders two ths when isHeader is true and textSecondCell is provided', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Name" textSecondCell="Credit" />);
    const ths = screen.getAllByRole('columnheader');
    expect(ths.length).toBe(2);
  });

  it('renders two tds when isHeader is false', () => {
    render(<CourseListRow textFirstCell="Name" textSecondCell="60" />);
    const tds = screen.getAllByRole('cell');
    expect(tds.length).toBe(2);
  });
});
