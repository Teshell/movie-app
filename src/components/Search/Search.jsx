import { useState } from "react";

import fetchMovie from "../../api/index";

import "./Search.css";

const Search = ({ movies, setMovies }) => {
  const [movie, setMovie] = useState("");

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      setMovies(await fetchMovie(movie));
    }
  };

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Search for a movie..."
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </div>
  );
};

export default Search;
