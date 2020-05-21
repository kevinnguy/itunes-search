import React from 'react';
import renderer from 'react-test-renderer';

import SearchList from './index';

test('renders correctly', () => {
  const tree = renderer.create(<SearchList />).toJSON();
  expect(tree).toMatchSnapshot();
});
