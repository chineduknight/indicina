import { shallow } from 'enzyme'
import { findByTestAttr } from 'test/testUtils'
import Navigation from 'pages/Search/Navigation'


const setup = () => {
  return shallow(<Navigation />);
}

test('renders the Navigtion without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'search-nav');
  expect(appComponent).toHaveLength(1)
});

test("renders the user-avatar without error ", () => {
  const wrapper = setup();
  const logoutBtn = findByTestAttr(wrapper, "search-avatar");
  expect(logoutBtn).toHaveLength(1);
});



