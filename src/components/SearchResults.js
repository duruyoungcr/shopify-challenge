import React, { useEffect } from 'react'
import Loader from "./Loader"
import DisplayMovies from './DisplayMovies'
import { useToast } from "@chakra-ui/react"

const SearchResults = ({results, loading, searchTerm, movies}) => {
    const toast = useToast();
      
    useEffect(() => {
        if (searchTerm !== "" && loading === false && results.Error !== "Incorrect IMDb ID.") {
            toast(
            {
                title: "An error occurred.",
                description: results.Error,
                status: "error",
                duration: 3000,
                isClosable: true,
              }
            )
        }
    }, [results])

    return (
        <div className="results-container">
            <h3>Search Results</h3>
            {results.Response === "True" && <p>We found {results.totalResults} matches for your search</p>}
            {loading && <Loader/>}
            <DisplayMovies movies={movies}/>
        </div>
    )
}

export default SearchResults
