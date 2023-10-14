import { searchMovies } from '../services/movies'
import { useCallback, useMemo, useRef, useState } from 'react'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  // el error no se usa pero puedes implementarlo si quieres:
  const [, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (err) {
      setError(err.message)
    } finally {
      // tanto en el try como en el catch
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    // console.log('memoSortedMovies')
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
