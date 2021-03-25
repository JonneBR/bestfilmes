import React from 'react';
import Slider from 'react-slick';
import './SlideShow.css';
import cover1 from '../../images/cover1.PNG';

export const SlideShow = () => {
  const settings = {
    centerMode: true,
    // centerPadding: '100px',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className='slide-show-wrapper'>
      {/* <Slider {...settings}> */}
      <div className='image-card'>
        <img src={cover1} style={{ width: 160 }} alt='' />
        <div className='inner-cards-control'>
          <button className='add-mylist'>
            <i class='fas fa-folder-plus'></i>
          </button>
          <button className='more-informations'>
            <i class='far fa-plus-square'></i>
          </button>
        </div>
      </div>
      {/* </Slider> */}
    </div>
  );
};
