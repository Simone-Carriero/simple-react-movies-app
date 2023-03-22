// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

/*breakpoints={{
// when window width is >= 640px
640: {
    width: 640,
        slidesPerView: movies.length < 2 ? movies.length : 2,
            spaceBetween: 20,
                },
// when window width is >= 768px
900: {
    width: 900,
        slidesPerView: movies.length < 4 ? movies.length : 4,
                },
            }}
            */

import { EffectCoverflow } from 'swiper';

const SwiperContainer = ({ movies, children }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={'auto'}
      lazy={true}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      initialSlide={0}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}>
      {children}
    </Swiper>
  );
};

export default SwiperContainer;
