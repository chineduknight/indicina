import { shallow } from 'enzyme'
import { findByTestAttr } from 'test/testUtils'
import UserAvatar from 'components/UserAvatar'


const setup = () => {
  return shallow(<UserAvatar />);
}

test('renders the userAvatar without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'user-avatar');
  expect(appComponent).toHaveLength(1)
});

test("logout button is not visible by default", () => {
  const wrapper = setup();
  const logoutBtn = findByTestAttr(wrapper, "logout-btn");
  expect(logoutBtn).toHaveLength(0);
});

describe("clicking the avatar ", () => {
  let wrapper = setup();
  test("clicking the avatar shows the button", () => {
    const avatarBtn = findByTestAttr(wrapper, "avatar-btn");
    expect(avatarBtn.length).toBe(1);

    let logoutBtn;
    // simulate click on submit button
    avatarBtn.simulate('click', { preventDefault() { } })
    logoutBtn = findByTestAttr(wrapper, "logout-btn");
    expect(logoutBtn).toHaveLength(1);
  });

  test("clicking the avatar again should hide the button", () => {
    const avatarBtn = findByTestAttr(wrapper, "avatar-btn");
    avatarBtn.simulate('click', { preventDefault() { } })
    const logoutBtn = findByTestAttr(wrapper, "logout-btn");
    expect(logoutBtn).toHaveLength(0);
  });
});

