const API_KEY = '4287ad07'
export const searchMovies = async ({ search }) => {
  if (search === '') return null
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const data = await res.json()

    const movies = data.Search

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (err) {
    throw new Error('Error searching movies')
  }
}
