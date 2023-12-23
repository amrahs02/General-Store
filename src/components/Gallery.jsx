import React from 'react';
import bulkSprite from '../assets/bulk-sprite.jpg';
import bulkLassi from '../assets/bulk-lassi.jpg';
import dahi from '../assets/dahi.png';
import lassi2 from '../assets/lassi2.jpg';
import goldMilk from '../assets/gold-milk.jpg';
import ghee from '../assets/ghee.jpg';
import freeze from '../assets/freeze.jpg';
import freez from '../assets/freez.jpg';
import hpPrinter from '../assets/hp-printer.png';
import lassi from '../assets/lassi.jpg';
import milk from '../assets/milk.png';
import paneer from '../assets/paneer.png';
import bulkShaktiMilk3 from '../assets/bulk-shakti-mik3.jpg';
import bulkShakti from '../assets/bulk-shakti.jpg';
import bulkShaktiMilk from '../assets/bulk-shakti-milk.jpg';
import fridge from '../assets/freedge-miscellaneous.jpg';
import bulkShaktiMilk2 from '../assets/bulk-shakti-milk2.jpg';
import bulkShakti4 from '../assets/bulk-shakti4.jpg';
import bulkSim from '../assets/bulk-sim.jpg';
import rabri from '../assets/surbhi-rabri.png';
import dairyMilk from '../assets/dairy-milk.jpg';

const shopHeading = "Explore Our Shop";

const Gallery = () => {
  const images = [
    bulkSprite,
    rabri,
    bulkLassi,
    fridge,
    dahi,
    lassi2,
    goldMilk,
    ghee,
    freeze,
    freez,
    hpPrinter,
    lassi,
    milk,
    paneer,
    bulkShaktiMilk3,
    bulkShakti,
    bulkShaktiMilk,
    bulkShaktiMilk2,
    bulkShakti4,
    bulkSim,
    dairyMilk,
  ];

  return (
    <div className="gallery-container text-center bg-gray-100 p-8">
      <h2 className="text-4xl font-bold mb-8 text-blue-500 animate__animated animate__fadeInDown">{shopHeading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Shop Image ${index + 1}`}
            className="w-full h-64 object-cover rounded-md shadow-md transition-transform transform hover:scale-105 animate__animated animate__fadeIn"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
