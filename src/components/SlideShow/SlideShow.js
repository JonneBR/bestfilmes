import React from 'react';
import Slider from 'react-slick';
import './SlideShow.css';

export const SlideShow = ({ movie }) => {
  const settings = {
    centerMode: true,
    swipeToSlide: true,
    // centerPadding: '100px',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    // slidesToScroll: 1,
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
              <img
                src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                style={{ width: 160 }}
                alt=''
              />
              <div className='inner-cards-control'>
                <button className='more-informations'>
                  <i className='far fa-plus-square'></i>
                </button>
                <div className='buttons-wrapper'>
                  <button className='add-mylist'>
                    <i className='fas fa-folder-plus'></i>
                  </button>
                  <button className='add-watchlist'>
                    <i className='far fa-eye'></i>
                  </button>
                  <button className='add-favorites'>
                    <i className='far fa-star'></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div>

        <div className='image-card'>
          <img src={cover1} style={{ width: 160 }} alt='' />
          <div className='inner-cards-control'>
            <button className='more-informations'>
              <i className='far fa-plus-square'></i>
            </button>
            <div className='buttons-wrapper'>
              <button className='add-mylist'>
                <i className='fas fa-folder-plus'></i>
              </button>
              <button className='add-watchlist'>
                <i className='far fa-eye'></i>
              </button>
              <button className='add-favorites'>
                <i className='far fa-star'></i>
              </button>
            </div>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};
