import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('should render the notifications list', () => {
    const wrapper = shallow(<Notifications />);
    const notifications = wrapper.find('ul');
    expect(notifications.exists()).toBe(true);
  });

  it('should render the correct number of notification items', () => {
    const wrapper = shallow(<Notifications />);
    const notificationItems = wrapper.find('li');
    expect(notificationItems.length).toBeGreaterThan(0); 
  });
});
