import { mount, shallow } from 'enzyme'
import { findByTestAttr } from 'test/testUtils'
import SearchControls from 'pages/Search/SearchControls'

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

const setup = () => {
  return shallow(<SearchControls />);
}

test('renders the SearchControls without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'search-controls');
  expect(appComponent).toHaveLength(1)
});


test('checks that the button renders', () => {
  const wrapper = setup();
  const searchBtn = findByTestAttr(wrapper, 'search-btn');
  expect(searchBtn).toHaveLength(1);
});

