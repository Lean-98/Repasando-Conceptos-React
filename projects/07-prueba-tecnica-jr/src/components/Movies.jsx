function ListOfMovies ({ movies }) {
  return (
    <ul className="movies">
      {
      movies.map(movie => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <strong>{movie.year}</strong>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))
      }
    </ul>
  )
}

function NoMoviesResults () {
  return <p>No movies found for this search!</p>
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />
}
