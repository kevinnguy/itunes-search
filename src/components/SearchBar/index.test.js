import React from 'react';
import renderer from 'react-test-renderer';

import SearchBar from './index';

test('renders correctly', () => {
  const tree = renderer.create(<SearchBar />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly when loading', () => {
  const tree = renderer.create(<SearchBar isLoading />).toJSON();
  expect(tree).toMatchSnapshot();
});
