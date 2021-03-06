import React from 'react';
import Slider from 'react-slick';
import ButtonControls from '../ButtonControls/ButtonControls';
import './SlideShow.css';

const SlideShow = ({ movie }) => {
  const settings = {
    centerMode: true,
    swipeToSlide: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1713,
        settings: {
          slidesToShow: 5,
          arrows: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 3,
          arrows: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          arrows: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className='slide-show-wrapper'>
      <Slider {...settings}>
        {movie.map((item) => {
          return (
            <div key={item.id} className='image-card'>
              {/* {console.log(item.id)} */}
              <img
                src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                style={{ width: 160 }}
                alt=''
              />
              <ButtonControls movie={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlideShow;
