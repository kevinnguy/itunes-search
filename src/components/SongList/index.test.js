import React from 'react';
import renderer from 'react-test-renderer';

import SongList from './index';
import mockData from '../../../__tests__/mockData.json';

test('renders correctly', () => {
  const tree = renderer.create(<SongList data={mockData} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders empty state', () => {
  const tree = renderer.create(<SongList />).toJSON();
  expect(tree).toMatchSnapshot();
});
