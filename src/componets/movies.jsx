/* eslint-disable react/prop-types */

const ListofMovies = ({ movies }) => {

  return (<ul className="movies__list">
    {
      movies.map(movie => (
        <li className="movie" key={movie.id}>
          <h3 className="movie__title">{movie.title}</h3>
          <p className="movie__year">{movie.year}</p>
          <img className='movie__poster' src={movie.poster} alt={movie.title} />
        </li>
      ))
    }
  </ul>)
}

const NoMoviesResults = () => {
  return (
    <p>No se encontraron películas para esta Búsqueda</p>
  )
}

export const Movies = ({ movies }) => {
  const hasmovies = movies?.length > 0

  return (
    hasmovies
      ? <ListofMovies movies={movies} />
      : <NoMoviesResults />

  )
}