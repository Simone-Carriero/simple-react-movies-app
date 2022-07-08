import "./movie-list.style.css"

const MovieList = ({ movies, handleFavorite, favouriteComponent }) => {

    const mappedMovies = movies.map(movie => (
        <div className="image-container" key={movie.imdbID} onClick={() => handleFavorite(movie)}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-container-inside">
                        gl
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <>
            {mappedMovies}
        </>
    )
}

export default MovieList