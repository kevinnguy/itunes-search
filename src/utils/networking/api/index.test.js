import { fetchSongResults } from './index';

test('no results without term', async () => {
  const results = await fetchSongResults();
  expect(results).toBe(null);
});

test('results with term', async () => {
  const results = await fetchSongResults('Adele');
  expect(results).not.toBe(null);
});
