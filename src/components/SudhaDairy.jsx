import React from 'react';
import { connect } from 'react-redux';
import { toggleLanguage } from '../actions/languageActions';
import { useNavigate } from 'react-router-dom';
import data from '../assets/Data/sudha-data.json';

const Sudhadairy = ({ language, toggleLanguage }) => {
  const navigate = useNavigate();
  const {
    welcome,
    sudhaDairy,
    discoverText,
    ourDairyDelights,
    specialOrders,
    deliveryCommitment,
    products,
    images,
  } = data;

  const getLocalizedString = (obj) => (language === 'english' ? obj.english : obj.hindi);

  return (
    <div className="contact-container p-8 bg-yellow-500">
      <button className="btn bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mb-6" onClick={() => navigate(-1)}>
        Go Back
      </button>

      <div className="contact-content bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-8">
          {`${getLocalizedString(welcome)} `}
          <span className="text-indigo-600">{getLocalizedString(sudhaDairy)}</span>
        </h2>

        <p className="text-gray-700 mt-4">{getLocalizedString(discoverText)}</p>

        <h3 className="text-2xl font-bold mt-8 mb-4">{getLocalizedString(ourDairyDelights)}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sudha Dairy Products */}
          {products.map((product, index) => (
            <div key={index} className="product-card bg-green-100 p-4 rounded-lg shadow-md text-center">
              <img
                src={images[product.image]}
                alt={getLocalizedString(product.name)}
                className="product-image h-40 object-cover rounded-lg shadow-md mx-auto mb-4"
              />
              <h4 className="text-lg font-bold text-indigo-600 mb-2">{getLocalizedString(product.name)}</h4>
              <p className="text-gray-700">{getLocalizedString(product.description)}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4">{getLocalizedString(specialOrders)}</h3>

        <p className="text-gray-700 mt-4">{getLocalizedString(deliveryCommitment)}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  language: state.language.language,
});

const mapDispatchToProps = {
  toggleLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sudhadairy);
