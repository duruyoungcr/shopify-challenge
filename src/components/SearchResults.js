import React from 'react'
import Loader from "./Loader"
import DisplayMovies from './DisplayMovies'

const SearchResults = ({results, loading, setNomMovie, movies}) => {
    
    return (
        <div className="results-container">
            <h3>Search Results</h3>
            {results.Response === "True" && <p>We found {results.totalResults} matches for your search</p>}
            {loading && <Loader/>}
            <DisplayMovies movies={movies} setNomMovie={setNomMovie}/>
        </div>
    )
}

export default SearchResults
