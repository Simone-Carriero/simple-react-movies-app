import React from 'react';
import SwiperContainer from '../swiper.component';
import { SwiperSlide } from 'swiper/react';
import './movie-list.styles.css';

const MovieList = ({ movies, handleFavorite, icon }) => {
  const filteredMovies = movies.filter((movie) => movie.poster_path);

  const IconComponent = icon;

  const mappedMovies = filteredMovies.map((movie) => (
    <SwiperSlide
      className='image-container'
      key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={`${movie.original_title} poster`}
      />

      <div
        className='overlay-container'
        onClick={() => handleFavorite(movie)}>
        <IconComponent />
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <SwiperContainer movies={filteredMovies}>{mappedMovies}</SwiperContainer>
    </>
  );
};

export default MovieList;
