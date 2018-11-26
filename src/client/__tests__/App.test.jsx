import React from 'react';
import { render } from 'react-dom';
import { shallow } from 'enzyme';
import { App } from 'app/App';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    render(<App />, div);
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
