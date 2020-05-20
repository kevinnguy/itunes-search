const CACHE_SIZE = '__cache_size';

export const createCache = size => ({
  [CACHE_SIZE]: size,
  data: [],
});

const isCacheFull = cache => cache.data.length >= cache[CACHE_SIZE];

const popCache = cache => cache.data.slice(1);

export const addSearchResultsToCache = (searchQuery, results, cache) => {
  if (isCacheFull(cache)) {
    popCache(cache);
  }

  cache.data.push({
    searchQuery,
    results,
  });
};

export const getSearchResultsFromCache = (searchQuery, cache) =>
  cache.data.find(obj => obj.searchQuery === searchQuery);
