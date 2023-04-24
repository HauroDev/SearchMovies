import axios from "axios"

const API_KEY = 'e9ebe99b'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await axios(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const data = await response.data

    const movies = data.Search

    return movies?.map(movie => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }
    })
  }
  catch (error) {
    throw new Error('Error searching movies')
  }

}