import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications Component", () => {
  it("renders Your notifications text in all cases", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".notifications-title p").text()).toEqual(
      "Your notifications"
    );
  });

  it("does not render notification items when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".Notifications").exists()).toBe(false);
  });

  it("renders notification items when displayDrawer is true", () => {
    const notifications = [
      { id: 1, type: "default", value: "New course available" },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} notifications={notifications} />
    );
    expect(wrapper.find(".Notifications").exists()).toBe(true);
    expect(wrapper.find("NotificationItem").length).toBe(1);
  });

  it("displays No new notification for now when notifications array is empty", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} notifications={[]} />);
    expect(wrapper.find(".Notifications p").text()).toEqual(
      "No new notification for now"
    );
  });
});
