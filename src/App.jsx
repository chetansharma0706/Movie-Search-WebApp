import { useState, useEffect } from "react";
import SearchIcon from "./Search.svg";
import MovieCard from "./MovieCard.jsx";

const API_URL = `https://omdbapi.com/?apikey=${
  import.meta.env.VITE_OMDB_API_KEY
}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    try {
      const res = await fetch(`${API_URL}&s=${title}`);
      const data = await res.json(); // Declare data correctly
      setMovies(data.Search); // show data to see the response
    } catch (error) {
      console.error("Error fetching movies:", error); // Handle potential errors
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchMovies(searchTerm); // Trigger search when Enter is pressed
    }
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <>
      <div className="app">
        <header className="header">
          <h1>Moviesbar</h1>
          <p>Find your next favorite movie.</p>
        </header>
        <div className="search-container">
          <img
            src={SearchIcon}
            className="search-icon"
            onClick={() => searchMovies(searchTerm)}
            alt="Search icon"
          />
          <input
            type="text"
            className="search-bar"
            value={searchTerm}
            placeholder="Search for Movies..."
            aria-label="Search for movies"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="movie-grid">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
