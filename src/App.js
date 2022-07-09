import {useState, useEffect} from 'react'

import MovieListHeading from "./components/movie-list-heading.component";
import SearchBox from "./components/search-box.component";
import MoviesContainer from "./components/movies-container.component";
import MovieList from "./components/movie-list/movie-list.component"
import FavoriteIcon from "./components/favorite-icon.component"
import RemoveIcon from "./components/remove-icon.component"


function App() {

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favoriteMovies, setFavoriteMovies] = useState(
    JSON.parse(localStorage.getItem('favoriteMovies')) || []
  )
  

  const addToFavorite = (movie) => {
    const newFavorite = [...favoriteMovies, movie]
    
    setFavoriteMovies(prevState => {
      const alreadyInFavorite = prevState.some(item => item.imdbID === movie.imdbID)

      return alreadyInFavorite ? prevState : newFavorite

    })
  }

  const removeFromFavorite = (movie) => {
    setFavoriteMovies(prevState => prevState.filter(item => item.imdbID !== movie.imdbID))
  }


  const fetchingData = async (searchValue) => {

    const data = await fetch(`http://www.omdbapi.com/?apikey=79555010&type=movie&s=${searchValue}`)
    const response = await data.json()

    if (response.Search) {

      setMovies(response.Search)
    }
  }

  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies))
  }, [favoriteMovies])

  useEffect(() => {
    fetchingData(searchValue)
  }, [searchValue])
  


  return (
    <div className="container-fluid">
      
      <div className="vh-100 d-flex flex-column">
        <div className="row d-flex align-items-center pt-3">
          <MovieListHeading
            heading="Movies"
          />
          <SearchBox 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
  
        <div className='row flex-grow-1'>
        
          <MoviesContainer>
            <MovieList 
              movies={movies}
              handleFavorite={addToFavorite}
              icon={FavoriteIcon}
            />
          </MoviesContainer>
        </div>

      </div>

      <div className="vh-100 d-flex flex-column">
    
        <div className="row pt-3">
          <MovieListHeading 
            heading='Favorite' 
          />
        </div>
      
        
        <div className="row flex-grow-1">
          <MoviesContainer>
            <MovieList 
              movies={favoriteMovies}
              handleFavorite={removeFromFavorite}
              icon={RemoveIcon}
            />
          </MoviesContainer>
        </div>
      
        
       </div>
     


    </div>
  );
}

export default App;
