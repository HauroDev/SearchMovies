import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './componets/movies'
import { useSearch } from './hooks/useSearch'
import { useState } from 'react'

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSubmit = event => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = event => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    getMovies({ search: newSearch })
  }

  return (<div className="app">

    <header>
      <h1>Buscador de películas</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input type="checkbox" onChange={handleSort} checked={sort} />
        <input onChange={handleChange} placeholder='Avenger, Star Wars, The Matrix ...' value={search} />
        <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </header>
    <main>
      {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
    </main>

  </div>)
}

export default App
