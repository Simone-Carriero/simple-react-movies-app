const MovieList = ({ movies, handleFavorite, favouriteComponent }) => {

    const mappedMovies = movies.map(movie => (
        <div key={movie.imdbID} onClick={() => handleFavorite(movie)}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
        </div>
    ))

    return (
        <>
            {mappedMovies}
        </>
    )
}

export default MovieList