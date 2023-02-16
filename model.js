let TICKET_PRICE = 29;
let category = "playing";
let persistSelectedMovie = localStorage.getItem("selectedMovie");
let selectedMovie = persistSelectedMovie && JSON.parse(persistSelectedMovie);
let persistOrderSummary = localStorage.getItem("orderSummary");
let orderSummary = persistSelectedMovie && JSON.parse(persistOrderSummary);
const MIN_SEATS_PER_ROW = 8;
const MAX_SEATS_PER_ROW = 14;
let movies = null;

const setOrderSummary = (orderSum) => {
  orderSummary = orderSum;
  localStorage.setItem("orderSummary", JSON.stringify(orderSum));
};

const setSelectedMovie = (movieId) => {
  selectedMovie = movies.find((movie) => movie._id === movieId);
  localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
};

const saveSelectedMovie = () => {
  localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
};

const setMovieCategory = (selectedCategory) => {
  category = selectedCategory;
  const movies = filterMoviesByCategory();
  updateMoviesByCategory(movies, selectedCategory);
};

const seatSelection = (seat) => {
  const rowNum = seat.getAttribute("data-row");
  const seatNum = seat.getAttribute("data-seat");
  setSelectedSeat(rowNum, seatNum);
  renderSeats(selectedMovie);
  renderOrderSummary(orderSummary);
};

const completeOrder = () => {
  let selectedSeatsCount = 0;
  selectedMovie.rows.forEach((row) => {
    row.seats.forEach((seat) => {
      if (seat.isSelected) {
        selectedSeatsCount++;
      }
    });
  });
  if (selectedSeatsCount) {
    selectedMovie.rows.forEach((row) => {
      row.seats.forEach((seat) => {
        if (seat.isSelected) {
          seat.isSelected = false;
          seat.isOccupied = true;
        }
      });
    });
    saveSelectedMovie();
    const movies = getMovies();
    const movieIdx = movies.findIndex(
      (movie) => movie._id === selectedMovie._id
    );
    movies.splice(movieIdx, 1, selectedMovie);
    saveMovies("movies", movies);
    setOrderSummary({
      seats: 0,
      price: 0,
    });
    window.location.assign("index.html");
  }
};

const fillEmptySeats = (rows) => {
  for (let i = 0; i <= 10; i++) {
    rows.push({
      rowNumber: i,
      seats: [],
    });
  }
  rows.forEach((row) => {
    const randomSeatsLength = getRandomNumber(
      MIN_SEATS_PER_ROW,
      MAX_SEATS_PER_ROW
    );
    row.seats = new Array(randomSeatsLength);
    for (let i = 0; i < row.seats.length; i++) {
      row.seats[i] = {
        seatNumber: i,
        isSelected: false,
        isOccupied: Math.random() > 0.8,
      };
    }
  });
};

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getMovies = () => {
  if (movies) {
    return movies;
  }
  if (localStorage.getItem("movies")) {
    movies = JSON.parse(localStorage.getItem("movies"));
    saveMovies("movies", movies);
    return movies;
  } else {
    movies = movieList;
    populateSeats(movies);
    saveMovies("movies", movies);
    return movies;
  }
};

const populateSeats = (movies) => {
  movies.forEach((movie) => {
    fillEmptySeats(movie.rows);
  });
};

const filterMoviesByName = (searchTerm) => {
  const filteredMovies = movies.filter((movie) =>
    movie.name.includes(searchTerm)
  );
  renderFilteredMovies(filteredMovies);
};

const filterMoviesByCategory = () => {
  return movies.filter((movie) => movie.category.includes(category));
};

const saveMovies = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const setSelectedSeat = (rowNumber, seatNumber) => {
  console.log(selectedMovie);
  const selectedSeat = selectedMovie.rows[rowNumber].seats[seatNumber];
  if (selectedSeat.isOccupied) return;
  selectedSeat.isSelected = !selectedSeat.isSelected;
  saveSelectedMovie();
  setOrderSummary({
    seats: (orderSummary.seats += selectedSeat.isSelected ? 1 : -1),
    price: (orderSummary.price += selectedSeat.isSelected
      ? TICKET_PRICE
      : -TICKET_PRICE),
  });
};

const initMoviesPage = () => {
  const movies = getMovies();
  initOrderSummary();
  renderMovies("root", movies);
};

const initOrderSummary = () => {
  if (!orderSummary) {
    const initialOrder = {
      seats: 0,
      price: 0,
    };
    localStorage.setItem("orderSummary", JSON.stringify(initialOrder));
  }
};

const initSeatSelectionPage = () => {
  setOrderSummary({
    seats: 0,
    price: 0,
  });
  renderSeats(selectedMovie);
  renderOrderSummary(orderSummary);
  renderMoviePreview(selectedMovie);
};
