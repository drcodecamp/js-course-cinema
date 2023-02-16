const onCategorySelect = (category) => {
  setMovieCategory(category);
};

const onSearchInputChange = (_, e) => {
  filterMoviesByName(e.target.value);
};

const onSeatSelectionPageLoad = () => {
  initSeatSelectionPage();
};

const onMoviesPageLoad = () => {
  initMoviesPage();
};

const onCompleteOrder = () => {
  completeOrder();
};

const onSeatSelection = (selectedSeat) => {
  seatSelection(selectedSeat);
};

const onBackButtonClick = () => {
  setOrderSummary({
    price: 0,
    seats: 0,
  });
  routeHomePage();
};

const onMovieClick = (movieId) => {
  console.log(movieId);
  setSelectedMovie(movieId);
  routeSeatPage();
};

const routeHomePage = () => {
  window.location.assign("index.html");
};

const routeSeatPage = () => {
  window.location.assign("seats.html");
};
