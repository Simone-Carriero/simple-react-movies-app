import React from 'react'
import SwiperContainer from '../swiper.component';
import { SwiperSlide } from 'swiper/react';
import "./movie-list.style.css"

const MovieList = ({ movies, handleFavorite, icon }) => {

    const IconComponent = icon;

    const moviesWithCover = movies.filter(movie => movie.poster_path)

    const mappedMovies = moviesWithCover.map(movie => (
        <SwiperSlide className="image-container" key={movie.id} onClick={() => handleFavorite(movie)}>
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
        </SwiperSlide>
    ))

   

    return (
        <>
            <SwiperContainer>
                {mappedMovies}
            </SwiperContainer>
        </>
    )
}

export default MovieList