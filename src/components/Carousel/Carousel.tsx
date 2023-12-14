import type { FC } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation} from 'swiper/modules';

import { IBook } from '../../interfaces/IBook';
import 'swiper/css';
import 'swiper/css/navigation';
import Book from '../Books/Book';
import Icons from '../Icons';

interface CarouselProps {
  books: IBook[]
}

export const SwiperNavPrev = () => {
  const swiper = useSwiper();

  return (  
      <div
        className='absolute left-0 top-0 h-full flex justify-center items-center pb-14 cursor-pointer z-10'
        onClick={() => swiper.slidePrev()}
      >
        <Icons.Left/>
      </div>
  );
};

export const SwiperNavNext = () => {
  const swiper = useSwiper();

  return (
    <div
      className='absolute right-0 top-0 flex h-full justify-center cursor-pointer items-center pb-14 z-10'
      onClick={() => swiper.slideNext()}
    >
      <Icons.Right/>
    </div>
  );
};

const Carousel: FC<CarouselProps> = ({books}) => {
  return (<div className='p-8'>
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        style={{padding: '0 3rem'}}
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 60,
          },
          1600: {
            slidesPerView: 6,
            spaceBetween: 60,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          books.map(book => (
            <SwiperSlide key={book.isbn}>
              <div className='flex justify-center pb-8'>
                <Book book={book}/>
              </div>
            </SwiperSlide>
          ))
        }
        <SwiperNavPrev/>
        <SwiperNavNext/>
      </Swiper>
  </div>);
}

export default Carousel;
