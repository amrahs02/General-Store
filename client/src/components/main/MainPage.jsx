import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sprite1 from "../../assets/images/sprite-2.jpg";
import sprite2 from "../../assets/images/sprite-3.jpg";
import sprite4 from "../../assets/images/sprite-4.jpg";
import { useSelector, useDispatch } from "react-redux";
import { toggleLanguage } from "../../LanguageToggle/LanguageSlice";
import CategoryCard from "../categories/CategoryCard";
import Gallery from "./Gallery";

const MainHeading = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );

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
      welcome: "Welcome to",
      storeName: "General Store ",
      Corner: ": An Ecommerce Site",
      discoverUs: "Discover Us",
    },
    hindi: {
      welcome: "आपका स्वागत है",
      storeName: "जनरल स्टोर",
      Corner: "& सुधा कॉर्नर",
      discoverUs: "हमें खोजें",
    },
  };

  // Use the appropriate language content based on the selected language
  const content = languageContent[currentLanguage];
  const toggleLanguage = () => {
    dispatch(toggleLanguage());
  };

  return (
    <>
      <div className="heading flex justify-center items-center rounded-2xl relative bg-gray-700 ">
        <Slider
          className="sm:w-10/1 w-full"
          ref={sliderRef}
          {...sliderSettings}
        >
          <div className="bg-cover bg-center rounded-2xl bg-no-repeat relative h-screen">
            <img
              className="w-screen h-full rounded-2xl opacity-60 object-cover"
              src={sprite1}
              alt="Slide 1"
            />
          </div>
          <div className="bg-cover rounded-2xl bg-center bg-no-repeat relative h-screen">
            <img
              className="w-screen rounded-2xl h-full opacity-60 object-cover"
              src={sprite2}
              alt="Slide 1"
            />
          </div>
          <div className="bg-cover rounded-2xl bg-center bg-no-repeat relative h-screen">
            <img
              className="w-screen rounded-2xl h-full opacity-60 object-cover"
              src={sprite4}
              alt="Slide 1"
            />
          </div>
        </Slider>
        <div className="absolute top-1/3 left-1/2 w-5/6 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          {/* The rest of your content */}
          <h1 className="text-6xl md:text-8xl mt-32 font-extrabold mb-6 text-white">
            <div className="text-2xl">{content.welcome}</div>
            <div>{content.storeName}</div>
            <div className="text-2xl">{content.Corner}</div>
          </h1>

          <div className="flex items-center justify-center space-x-4">
            <Link to="/discoverus">
              <button className="bg-blue-500 text-white rounded-2xl px-10 py-3 hover:bg-blue-700">
                {content.discoverUs}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-center text-3xl text-white font-bold py-4 rounded-2xl m-4 bg-slate-700 ">
        Categories We Offer
      </h1>
      {/* <div className="grid grid-cols-1 rounded-2xl sm:grid-cols-2 bg-slate-700  md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-3xl mt-2">
        <CategoryCard />
      </div> */}
    </>
  );
};

export default MainHeading;
