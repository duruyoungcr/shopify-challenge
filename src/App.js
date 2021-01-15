import React, { useState, useEffect } from 'react'
import './App.css';
import SearchInput from "./components/SearchInput"
import SearchResults from './components/SearchResults'
import Nominations from './components/Nominations'
import axios from 'axios'
import baseURL from "./request"

function App() {
  const [searchTerm , setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [nomMovie, setNomMovie] = useState({});

  useEffect(() => {
    FetchMovies()
    if (searchTerm === '' || loading) {
      setResults([]) ;
      setMovies([]);
    }
  }, [searchTerm])

  const FetchMovies = async () => {
    try {
      const response = await axios.get(baseURL + searchTerm)
      setResults(response.data);
      setLoading(false);
      if (response.data.Response === "True") {
        setMovies(response.data.Search)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} setLoading={setLoading}/>
      <SearchResults results={results} loading={loading} searchTerm={searchTerm} movies={movies} setNomMovie={setNomMovie}/>
      <Nominations  nomMovie={nomMovie}/>
    </div>
  );
}


export default App;
