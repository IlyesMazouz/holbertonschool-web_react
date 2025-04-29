import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  
  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
    const tr = wrapper.find('tr');
    const th = wrapper.find('th');
    expect(th.prop('colSpan')).toBe(2);
    expect(tr.prop('className')).toContain('header');
  });

  it('renders two th elements when isHeader is true and textSecondCell is provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />);
    const tr = wrapper.find('tr');
    const thElements = wrapper.find('th');
    expect(thElements.length).toBe(2);
    expect(tr.prop('className')).toContain('header');
  });

  it('renders two td elements with correct background color when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />);
    const tr = wrapper.find('tr');
    const tdElements = wrapper.find('td');
    expect(tdElements.length).toBe(2);
    expect(tr.prop('className')).toContain('row');
  });

  it('renders the CourseListRow component as a header with one cell and colspan = 2', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header Only" />);
    const th = wrapper.find('th');
    expect(th.length).toBe(1);
    expect(th.prop('colSpan')).toBe(2);
  });

  it('renders the CourseListRow component as a header with two cells and both are displayed', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header First" textSecondCell="Header Second" />);
    const thElements = wrapper.find('th');
    expect(thElements.length).toBe(2);
    expect(thElements.at(0).text()).toBe('Header First');
    expect(thElements.at(1).text()).toBe('Header Second');
  });

  it('renders the CourseListRow component as a regular row with two cells and both are displayed', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Row First" textSecondCell="Row Second" />);
    const tdElements = wrapper.find('td');
    expect(tdElements.length).toBe(2);
    expect(tdElements.at(0).text()).toBe('Row First');
    expect(tdElements.at(1).text()).toBe('Row Second');
  });

  it('calls the onChangeRow function when the checkbox is checked or unchecked', () => {
    const mockOnChangeRow = jest.fn();
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="Row First"
        textSecondCell="Row Second"
        onChangeRow={mockOnChangeRow}
        courseId={1}
      />
    );

    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.simulate('change', { target: { checked: true } });
    expect(mockOnChangeRow).toHaveBeenCalledWith(1, true);

    checkbox.simulate('change', { target: { checked: false } });
    expect(mockOnChangeRow).toHaveBeenCalledWith(1, false);
  });
});
