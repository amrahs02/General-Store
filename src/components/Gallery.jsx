import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ images }) => {
  return (
    <div className="gallery-section mt-8">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Shop Image ${index + 1}`}
            className="w-full h-auto rounded"
          />
        ))}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
