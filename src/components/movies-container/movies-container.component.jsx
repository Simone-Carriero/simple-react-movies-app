import './movies-container.style.css'

const MoviesContainer = ({ children }) => {



    return (
        <div className="movie-list-container d-flex align-items-center gap-5 flex-nowrap p-4 mb-5">
            {children}
        </div>
    )
}

export default MoviesContainer