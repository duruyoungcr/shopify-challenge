import React, { useEffect } from 'react'
import Loader from "./Loader"
import DisplayMovies from './DisplayMovies'
import { useToast } from "@chakra-ui/react"

const SearchResults = ({results, loading, searchTerm}) => {
    const toast = useToast();
    console.log(results);
    
    useEffect(() => {
        if (searchTerm !== "" && loading === false && results.Error === "Too many results.") {
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
            <div>
            {loading && <Loader/> }
            { !loading && results.Response === "True" && 
                results.Search.map((movie) => {
                    <DisplayMovies movie={movie}/>
                })
            }
            </div>
        </div>
    )
}

export default SearchResults
