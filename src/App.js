import {useState, useEffect} from 'react'

import MovieListHeading from "./components/movie-list-heading.component";
import SearchBox from "./components/search-box.component";
import MoviesContainer from "./components/movies-container/movies-container.component";
import MovieList from "./components/movie-list/movie-list.component"



function App() {

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favoriteMovies, setFavoriteMovies] = useState([])

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
    fetchingData(searchValue)
  }, [searchValue])
  


  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center p-3">
        <MovieListHeading
          heading="Movies"
        />
        <SearchBox 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>

        <MoviesContainer>
          <MovieList 
            movies={movies}
            handleFavorite={addToFavorite}
          />
        </MoviesContainer>

        
          <MovieListHeading 
            heading='Favorite' 
          />
          <MoviesContainer>
            <MovieList 
              movies={favoriteMovies}
              handleFavorite={removeFromFavorite}
            />
          </MoviesContainer>
       
     


    </div>
  );
}

export default App;
