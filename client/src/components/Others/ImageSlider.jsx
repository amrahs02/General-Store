import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sprite1 from "../../assets/images/sprite-2.jpg";
import sprite2 from "../../assets/images/sprite-3.jpg";
import sprite4 from "../../assets/images/sprite-4.jpg";

const ImageSlider = () => {


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
    <div className="flex" >
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
      
    </div>
  )
}

export default ImageSlider
