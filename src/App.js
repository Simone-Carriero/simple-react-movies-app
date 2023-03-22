import { useState, useEffect, useMemo } from 'react';

import MovieListHeading from './components/movie-list-heading.component';
import SearchBox from './components/search-box.component';
import MoviesContainer from './components/movies-container.component';
import MovieList from './components/movie-list/movie-list.component';
import FavoriteIcon from './components/favorite-icon.component';
import RemoveIcon from './components/remove-icon.component';
import Spinner from './components/spinner/spinner.component';

const moviesLocalStorage = () => {
  return localStorage.getItem('favoriteMovies')
    ? JSON.parse(localStorage.getItem('favoriteMovies'))
    : [];
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [favoriteMovies, setFavoriteMovies] = useState(moviesLocalStorage());

  const fetchingData = async (query) => {
    const apiKey = 'd18faed178ecfe803a99a44d89e2d11b';

    setLoading(true);
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );
      const response = await data.json();
      setMovies(response?.results);
    } catch (error) {
      console.log(error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const debounce = () => {
    let timeoutID;
    return (searchValue) => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        fetchingData(searchValue);
      }, 1500);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);

  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const addToFavorite = (movie) => {
    const newFavorite = [...favoriteMovies, movie];

    setFavoriteMovies((prevState) => {
      const alreadyInFavorite = prevState.some((item) => item.id === movie.id);

      return alreadyInFavorite ? prevState : newFavorite;
    });
  };

  const removeFromFavorite = (movie) => {
    setFavoriteMovies((prevState) =>
      prevState.filter((item) => item.id !== movie.id)
    );
  };

  return (
    <main className='app-container'>
      <div className='vh-100 d-flex flex-column section-container'>
        <nav className='navbar'>
          <div className='container-fluid'>
            <MovieListHeading heading='Movies' />
            <SearchBox
              searchValue={searchValue}
              handleChange={(e) => {
                setSearchValue(e.target.value);
                optimizedDebounce(e.target.value);
              }}
            />
          </div>
        </nav>

        <MoviesContainer>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <MovieList
                movies={movies}
                handleFavorite={addToFavorite}
                icon={FavoriteIcon}
              />
            </>
          )}
        </MoviesContainer>
      </div>

      <div className='vh-100 d-flex flex-column section-container'>
        <section>
          <div className='container-fluid py-2'>
            <MovieListHeading heading='Favorite' />
          </div>
        </section>

        <MoviesContainer>
          <MovieList
            movies={favoriteMovies}
            handleFavorite={removeFromFavorite}
            icon={RemoveIcon}
            type='favoriteMovies'
          />
        </MoviesContainer>
      </div>
    </main>
  );
};

export default App;
