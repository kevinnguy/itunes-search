import React from 'react';
import renderer from 'react-test-renderer';

import SongRow from './index';
import mockData from '../../../__tests__/mockData.json';

const rowData = mockData.results[0];

test('renders correctly with data', () => {
  const tree = renderer.create(<SongRow data={rowData} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders more details', () => {
  const tree = renderer.create(<SongRow data={rowData} showDetails />).toJSON();
  expect(tree).toMatchSnapshot();
});
