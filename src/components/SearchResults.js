import React from 'react'
import Loader from "./Loader"
import DisplayMovies from './DisplayMovies'

const SearchResults = ({results, loading, setNomMovie, movies, nomIDS}) => {
    
    return (
        <div className="results-container">
            <p className="title">Search Results</p>
            {results.Response === "True" && <p className="sub-title">We found {results.totalResults} matches for your search, Here are the top 10 matches</p>}
            {loading && <Loader/>}
            <DisplayMovies movies={movies} setNomMovie={setNomMovie} nomIDS={nomIDS}/>
        </div>
    )
}

export default SearchResults
