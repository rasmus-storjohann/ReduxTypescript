import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme'

it('should render correctly', () => {
  const tree = shallow(<Text>This is a test!</Text>);
  expect(tree).toMatchSnapshot();
});
