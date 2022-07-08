import "./movie-list.style.css"

const MovieList = ({ movies, handleFavorite, icon }) => {

    const IconComponent = icon;

    const mappedMovies = movies.map(movie => (
        <div className="image-container" key={movie.imdbID} onClick={() => handleFavorite(movie)}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <div className="overlay-container">
                <div className="icon-container">
                    <IconComponent />
                </div>
                <div className="overlay">
                    <div className="overlay-container-inside">
                        <IconComponent />
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