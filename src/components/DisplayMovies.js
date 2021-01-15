import React from 'react'

const DisplayMovies = ({movie}) => {
    console.log(movie);
    return (
        <div className="movie-list">
            <p>{movie.Title}</p>
        </div>
    )
}

export default DisplayMovies

