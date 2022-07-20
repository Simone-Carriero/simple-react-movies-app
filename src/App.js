import {useState, useEffect} from 'react'

import MovieListHeading from "./components/movie-list-heading.component";
import SearchBox from "./components/search-box.component";
import MoviesContainer from "./components/movies-container.component";
import MovieList from "./components/movie-list/movie-list.component"
import FavoriteIcon from "./components/favorite-icon.component"
import RemoveIcon from "./components/remove-icon.component"

import './App.css'

function App() {

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favoriteMovies, setFavoriteMovies] = useState(
    JSON.parse(localStorage.getItem('favoriteMovies')) || []
  )

  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies))
  }, [favoriteMovies])

  useEffect(() => {
    if (searchValue) {
      fetchingData(searchValue)
    }
  }, [searchValue])
  

  const addToFavorite = (movie) => {
    const newFavorite = [...favoriteMovies, movie]
    
    setFavoriteMovies(prevState => {
      const alreadyInFavorite = prevState.some(item => item.id === movie.id)

      return alreadyInFavorite ? prevState : newFavorite

    })
  }

  const removeFromFavorite = (movie) => {
    setFavoriteMovies(prevState => prevState.filter(item => item.id !== movie.id))
  }


  const fetchingData = async () => {

    const apiKey = "d18faed178ecfe803a99a44d89e2d11b";

    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`)
    const response = await data.json()

    if (response.results) {

      setMovies(response.results)
    }
  }

 
  


  return (
    <div className="container-fluid app-container">
      
      <div className="vh-100 d-flex flex-column section-container">
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

      <div className="vh-100 d-flex flex-column section-container">
    
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
              type='favoriteMovies'
            />
          </MoviesContainer>
        </div>
      
        
       </div>
     


    </div>
  );
}

export default App;
