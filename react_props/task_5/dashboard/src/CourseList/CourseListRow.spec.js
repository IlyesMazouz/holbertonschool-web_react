import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("<CourseListRow />", () => {
  it("renders one column header with colSpan=2 when isHeader is true and textSecondCell is null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
    const th = wrapper.find("th");
    expect(th).toHaveLength(1);
    expect(th.prop("colSpan")).toEqual(2);
  });

  it("renders two column headers when isHeader is true and textSecondCell is not null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test1" textSecondCell="Test2" />);
    const th = wrapper.find("th");
    expect(th).toHaveLength(2);
    expect(th.at(0).text()).toEqual("Test1");
    expect(th.at(1).text()).toEqual("Test2");
  });

  it("renders two table cells when isHeader is false", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test1" textSecondCell="Test2" />);
    const td = wrapper.find("td");
    expect(td).toHaveLength(2);
    expect(td.at(0).text()).toEqual("Test1");
    expect(td.at(1).text()).toEqual("Test2");
  });
});
