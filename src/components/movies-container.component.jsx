const MoviesContainer = ({ children }) => {



    return (
        <div className="movie-list-container d-flex align-items-center justify-content-center gap-5 p-5">
            {children}
        </div>
    )
}

export default MoviesContainer