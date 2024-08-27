import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sprite1 from '../../assets/images/sprite-2.jpg';
import sprite2 from '../../assets/images/sprite-3.jpg';
import sprite4 from '../../assets/images/sprite-4.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLanguage } from '../../LanguageToggle/LanguageSlice';

const MainHeading = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.currentLanguage);

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

  // Language-specific content
  const languageContent = {
    english: {
      welcome: 'Welcome to',
      storeName: 'Anushka General Store ',
      Corner: ' & Dairy Corner : An Ecommerce Site',
      discoverUs: 'Discover Us',
    },
    hindi: {
      welcome: 'आपका स्वागत है',
      storeName: 'अनुष्का जनरल स्टोर',
      Corner: '& सुधा कॉर्नर',
      discoverUs: 'हमें खोजें',
    },
  };

  // Use the appropriate language content based on the selected language
  const content = languageContent[currentLanguage];

  const toggleLanguage = () => {
    dispatch(toggleLanguage());
  };

  return (
    <>
      <div className="heading rounded-xl relative bg-slate-900">
        <Slider ref={sliderRef} {...sliderSettings}>
          <div className="bg-cover bg-center rounded-xl bg-no-repeat relative h-screen">
            <img className='w-screen h-full rounded-xl opacity-60 object-cover' src={sprite1} alt="Slide 1" />
          </div>
          <div className="bg-cover rounded-xl bg-center bg-no-repeat relative h-screen">
            <img className='w-screen rounded-xl h-full opacity-60 object-cover' src={sprite2} alt="Slide 1" />
          </div>
          <div className="bg-cover rounded-xl bg-center bg-no-repeat relative h-screen">
            <img className='w-screen rounded-xl h-full opacity-60 object-cover' src={sprite4} alt="Slide 1" />
          </div>
        </Slider>
        <div className="absolute top-1/3 left-1/2 w-5/6 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          {/* The rest of your content */}
          <h1 className="text-6xl md:text-8xl mt-32 font-extrabold mb-6 text-white">
            <div className='text-2xl'>{content.welcome}</div>
            <div>
              {content.storeName}
            </div>
            <div className='text-2xl'>{content.Corner}</div>
          </h1>

          <div className="flex items-center justify-center space-x-4">
            <Link to="/discoverus">
              <button className="bg-blue-500 text-white rounded-full px-10 py-3 hover:bg-blue-700">
                {content.discoverUs}
              </button>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeading;
