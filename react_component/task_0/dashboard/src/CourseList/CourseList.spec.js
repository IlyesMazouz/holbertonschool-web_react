import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("<CourseList />", () => {
  it("renders 5 rows when given an array of courses", () => {
    const courses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    const wrapper = shallow(<CourseList courses={courses} />);
    const rows = wrapper.find("CourseListRow");
    expect(rows).toHaveLength(5);
  });

  it("renders 1 row when courses array is empty", () => {
    const wrapper = shallow(<CourseList courses={[]} />);
    const rows = wrapper.find("CourseListRow");
    expect(rows).toHaveLength(1);
    expect(rows.at(0).prop("textFirstCell")).toEqual("No course available yet");
  });
});
