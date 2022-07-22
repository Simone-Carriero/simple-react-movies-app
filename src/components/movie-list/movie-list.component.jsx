import React from 'react'
import SwiperContainer from '../swiper.component';
import { SwiperSlide } from 'swiper/react';
import "./movie-list.styles.css"


const MovieList = ({ movies, handleFavorite, icon }) => {

    const IconComponent = icon;

    const mappedMovies = movies.filter(movie => movie.poster_path).map(movie => (
        <SwiperSlide className="image-container" key={movie.id} onClick={() => handleFavorite(movie)}>
            
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.original_title} poster`} />

            
            <div className="overlay-container">

                <IconComponent />
             
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