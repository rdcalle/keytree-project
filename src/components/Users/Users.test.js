import React from 'react';
import configureStore from 'redux-mock-store';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Users from './index';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
const initialState = {};
let wrapper;
let store;

beforeEach(() => {
  store = mockStore(initialState)
  wrapper = shallow(<Users store={store}/>)
})

it('renders without crashing', () => {
  expect(wrapper.length).toEqual(1)
});