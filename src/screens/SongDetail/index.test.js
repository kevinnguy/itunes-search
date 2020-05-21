import React from 'react';
import renderer from 'react-test-renderer';

import SongDetail from './index';
import mockData from '../../../__tests__/mockData.json';

const songData = mockData.results[0];

test('renders correctly', () => {
  const tree = renderer.create(<SongDetail data={songData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
