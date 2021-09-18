import { useState } from "react";

import Movies from "./components/Movies/Movies";
import Search from "./components/Search/Search";

import "./App.css";

function App() {
  const [movies, setMovies] = useState();

  return (
    <div className="App">
      <h1 className="title">Movie App</h1>

      <Search movies={movies} setMovies={setMovies} />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
