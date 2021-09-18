import "./Movies.css";

const Movies = ({ movies }) => {
  return (
    <div className="movies">
      {movies &&
        movies.map((movie) => (
          <div className="movie" key={movie.imdbID}>
            <img src={movie.Poster} alt="Poster" />
            <h2>{movie.Title}</h2>
          </div>
        ))}
    </div>
  );
};

export default Movies;
