import { useEffect, useState, useRef, useCallback } from 'react'
import './app.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState('')
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) { // Se utiliza para saber si es el primer input del usuario
      isFirstInput.current = search === '' // true
      return
    }

    if (search === '') {
      setError('You can´t look for an empty film')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('You can´t search for a movie with a number')
      return
    }

    if (search.length < 3) {
      setError('The search must be at least 3 characters long')
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  const handleSubmit = (e) => {
    e.preventDefault() // Evitar comportamiento por defecto
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const hadleChange = (e) => {
    const newSearch = e.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Searcher of Movies</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={hadleChange}
            value={search}
            placeholder='Star Wars, The Matrix...'
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Loading...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
