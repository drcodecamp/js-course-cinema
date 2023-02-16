const renderSeats = (selectedMovie) => {
  document.querySelector("#root").innerHTML = generateSeats(selectedMovie);
};

const renderOrderSummary = (orderSummary) => {
  if (!orderSummary) {
    return (document.querySelector(`#summary`).innerHTML = `לא נבחרו כרטיסים`);
  }
  document.querySelector(
    `#summary`
  ).innerHTML = `${orderSummary.seats} כיסאות נבחרו (${orderSummary.price} ש"ח)`;
};

const generateSeats = (selectedMovie) => {
  if (!selectedMovie) {
    window.location.assign("index.html");
  }
  const rows = selectedMovie.rows;
  let rowHtml = ``;
  // language=HTML
  rows.forEach((row) => {
    const rowSeats = row.seats.map((seat) => {
      const seatClass = seat.isOccupied
        ? "tooltip seat-icon"
        : seat.isSelected
        ? `tooltip seat-icon selected`
        : `tooltip seat-icon empty`;

      return `
                <div onclick="onSeatSelection(this)" data-row="${
                  row.rowNumber
                }" data-seat="${seat.seatNumber}" class="${seatClass}">${
        seat.isSelected ? "V" : ""
      }
                    <span class="tooltiptext">שורה ${row.rowNumber + 1} כיסא ${
        seat.seatNumber + 1
      } </span>
                </div>`;
    });
    rowHtml += `
            <div class="seat-row">
                <div class="row-number">${row.rowNumber + 1}
                </div>
                ${rowSeats.join("")}
            </div>`;
  });
  return rowHtml;
};

const renderMoviePreview = (selectedMovie) => {
  document.querySelector(`#movie-preview`).innerHTML = `
        <div class="movie-cover">
            <img src="${selectedMovie.coverImageUri}" alt="movie" />
        </div>
        <div class="movie-information">
            <div class="movie-specs">
                <div class="movie-title">${selectedMovie.name}</div>
            </div>
            <div class="movie-location">${selectedMovie.date}</div>
            <p>${selectedMovie.description}</p>
        </div>
    `;
};

const renderCategoryText = (selectedMoviesCategory) => {
  const filters = document.querySelectorAll(".filter-type");
  filters.forEach((filter) => {
    const category = filter.getAttribute("data-category");
    if (category === selectedMoviesCategory) {
      filter.style.color = "white";
      filter.style.fontSize = "44px";
    } else {
      filter.style.color = "gray";
      filter.style.fontSize = "22px";
    }
  });
};

const renderMovies = (id, movies) => {
  const movieList = generateMovies(movies);
  const element = document.querySelector(`#${id}`);
  if (element) {
    element.innerHTML = movieList;
  }
};

const generateMovie = (movie) => `
    <div>
         <div class="movie-card">
            <img src="${movie.coverImageUri}" alt="${movie.name}"/>
            <button onclick="onMovieClick('${movie._id}')" class="order-button" data-movie="${movie._id}">
                הזמנת כרטיסים
            </button>
       </div>
    </div>
    `;

const generateMovies = (movies) => {
  let htmlStr = ``;
  movies.forEach((movie) => {
    htmlStr += generateMovie(movie);
  });
  return htmlStr;
};

const renderFilteredMovies = (filteredMovies) => {
  renderMovies("root", filteredMovies);
};

const updateMoviesByCategory = (movies, selectedCategory) => {
  renderCategoryText(selectedCategory);
  renderMovies("root", movies);
};
