import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { store } from './redux';

Enzyme.configure({ adapter: new Adapter() });

describe('integration test', () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  it('should change the selected menu entry', () => {
    wrapper.find('Link[to="/repos"]').simulate('click');
    expect(wrapper.find('Link[to="/repos"]').parent().hasClass('ant-menu-item-selected')).toEqual(true);
  });

});