import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sprite1 from '../assets/sprite-2.jpg';
import sprite2 from '../assets/sprite-3.jpg';
import sprite4 from '../assets/sprite-4.jpg';
import { toggleLanguage } from '../actions/languageActions';
import { connect } from 'react-redux';

const MainHeading = ({ language, toggleLanguage }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next slide
      sliderRef.current.slickNext();
    }, 5000); // Change this value to adjust the interval (in milliseconds)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <div className="heading relative bg-black">
        <Slider ref={sliderRef} {...sliderSettings}>
          <div className="bg-cover bg-center bg-no-repeat relative h-screen">
            <img
              className='w-screen h-full opacity-50 object-cover rounded-md'
              src={sprite1}
              alt="Slide 1"
            />
          </div>
          <div className="bg-cover bg-center bg-no-repeat relative h-screen">
            <img
              className='w-screen h-full opacity-50 object-cover rounded-md'
              src={sprite2}
              alt="Slide 1"
            />
          </div>
          <div className="bg-cover bg-center  bg-no-repeat relative h-screen">
            <img
              className='w-screen h-full opacity-50 object-cover rounded-md'
              src={sprite4}
              alt="Slide 1"
            />
          </div>
        </Slider>
        <div className="absolute top-1/3 left-1/2 w-5/6 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          {/* The rest of your content */}
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-white">
            <div className='text-2xl'>Welcome to</div>
            <div>
              Anushka General Store
            </div>
            <div className='text-2xl'>& Sudha Corner</div>
          </h1>
          <p className="text-lg md:text-xl font-semibold mb-10 text-blue-300">
            {language === 'english'
              ? 'Discover a world of quality products and exceptional service.'
              : 'उत्कृष्ट उत्पादों और असाधारण सेवा का एक दुनिया का खोज करें।'}
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link to="/discoverus">
              <button className="bg-blue-500 text-white rounded-full px-10 py-3 hover:bg-blue-700">
                Discover Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  language: state.language.language,
});

const mapDispatchToProps = {
  toggleLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeading);


