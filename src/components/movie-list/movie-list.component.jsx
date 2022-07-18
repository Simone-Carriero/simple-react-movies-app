import "./movie-list.style.css"

const MovieList = ({ movies, handleFavorite, icon }) => {

    const IconComponent = icon;

    const moviesWithCover = movies.filter(movie => movie.poster_path)

    const mappedMovies = moviesWithCover.map(movie => (
        <div className="image-container" key={movie.id} onClick={() => handleFavorite(movie)}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.original_title} poster`} />
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