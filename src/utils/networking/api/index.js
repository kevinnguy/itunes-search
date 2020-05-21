import {
  createCache,
  addSearchResultsToCache,
  getSearchResultsFromCache,
} from '../cache';

const cache = createCache(10);

export const fetchSongResults = async term => {
  if (!term?.length) {
    return null;
  }

  const searchQuery = encodeURI(term.toLowerCase());

  const cachedResults = getSearchResultsFromCache(searchQuery, cache);
  if (cachedResults) {
    return cachedResults;
  }

  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${searchQuery}&media=music&entity=song`,
    );
    const { results } = await response.json();
    addSearchResultsToCache(searchQuery, results, cache);
    return results;
  } catch (error) {
    return new Error('Something went wrong, please try again');
  }
};
