import React from 'react'
import { Box, Image, Badge } from "@chakra-ui/react"

const DisplayMovies = ({movies}) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => {
                return (
                    <Box maxW="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" key={movie.imdbID} m="2" d="flex">
                        <Image src={movie.Poster} alt={movie.Title} height="200px" maxW="150px"/>
                        <Box p="2" maxW="100%">
                            <Box d="flex" alignItems="baseline" mt="2">
                                <Badge borderRadius="full" px="2" colorScheme="teal">
                                {movie.Type}
                                </Badge>
                            </Box>
                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h6"
                            lineHeight="tight"
                            isTruncated
                            
                        >
                            {movie.Title}
                        </Box>
                        <Box fontWeight="semibold">
                           Released: {movie.Year}
                        </Box>
                    </Box>
                </Box>
                )   
                })
            }
        </div>
    )
}

export default DisplayMovies;

