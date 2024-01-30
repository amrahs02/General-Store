import  { useState } from 'react';
import bulkShaktiMilk3 from '../../assets/images/bulk-shakti-mik3.jpg';
import bulkSprite from '../../assets/images/bulk-sprite.jpg';
import bulkLassi from '../../assets/images/bulk-lassi.jpg';
import lassi2 from '../../assets/images/lassi2.jpg';
import goldMilk from '../../assets/images/gold-milk.jpg';
import ghee from '../../assets/images/ghee.jpg';
import freeze from '../../assets/images/freeze.jpg';
import freez from '../../assets/images/freez.jpg';
import lassi from '../../assets/images/lassi.jpg';
import milk from '../../assets/images/milk.png';
import paneer from '../../assets/images/paneer.png';
import bulkShaktiMilk from '../../assets/images/bulk-shakti-milk.jpg';
import fridge from '../../assets/images/freedge-miscellaneous.jpg';
import bulkSim from '../../assets/images/bulk-sim.jpg';
import rabri from '../../assets/images/surbhi-rabri.png';
import dairyMilk from '../../assets/images/dairy-milk.jpg';

const shopHeading = "Gallery";

const Gallery = () => {
  const allImages = [
    bulkShaktiMilk,
    goldMilk,
    freeze,
    bulkSprite,
    bulkLassi,
    lassi2,
    bulkSim,
    dairyMilk,
    bulkShaktiMilk3,
    rabri,
    fridge,
    ghee,
    freez,
    lassi,
    milk,
    paneer,
  ];

  const [visibleImages, setVisibleImages] = useState(4);

  const handleSeeMoreClick = () => {
    setVisibleImages(allImages.length); // Show all images
  };

  return (
    <div className="gallery-container text-center rounded-xl bg-gray-700 ">
      <h2 className="text-center text-3xl text-white font-bold mt-6 p-4 rounded-xl  bg-slate-800 ">
        {shopHeading}
      </h2>
      <div className="w-fit mt-2 sm:px-44  grid grid-cols-1 rounded-xl sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allImages.slice(0, visibleImages).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Shop Image ${index + 1}`}
            className="w-full rounded-xl h-64 object-cover bg-slate-800 shadow-md transition-transform transform hover:scale-105 animate__animated animate__fadeIn"
          />
        ))}
      </div>
      {visibleImages !== allImages.length && (
        <button
          onClick={handleSeeMoreClick}
          className=" m-4 px-4 py-2  text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 "
        >
          See More
        </button>
      )}
    </div>
  );
};

export default Gallery;
