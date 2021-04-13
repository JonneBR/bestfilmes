export const handleWatchlist = (movie, history) => {
  history.push('/watchlist', {
    params: movie,
  });
};
