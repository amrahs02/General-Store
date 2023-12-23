import { useContext } from 'react';
import { CartContext } from '../context/cart.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import productData from '../assets/Data/data.json';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import BackButton from './Navigation/BackButton.jsx';

export default function Products() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const notify = (item, type) =>
    toast[type](`${item.title} ${type === 'success' ? 'added to' : 'removed from'} cart!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      style: {
        backgroundColor: type === 'success' ? '#41D8B3' : '#EF4444',
        color: '#fff',
      },
    });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notify(product, 'error');
  };

  return (
    <div className="contact-container p-8 bg-gray-100">
      <ToastContainer />

     <BackButton/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-8 sm:bg-white rounded-lg  gap-4">
        
        {productData.products.map((product) => (
          <div key={product.id} className="bg-slate-100 shadow-md w-fit rounded-lg p-6">
            <img src={product.thumbnail} alt={product.title} className="rounded-md w-52 h-52 object-cover mb-4" />

            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">{product.title}</h1>
              <p className="mt-2 text-gray-600 text-sm">{product.description.slice(0, 40)}...</p>
              <p className="mt-2 text-gray-600">₹{product.price}</p>
            </div>

            <div className="mt-4 flex justify-between items-center">
              {!cartItems.find((item) => item.id === product.id) ? (
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold uppercase hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    addToCart(product);
                    notify(product, 'success');
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="flex items-center">
                  <button
                    className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      const cartItem = cartItems.find((item) => item.id === product.id);
                      cartItem.quantity === 1 ? handleRemoveFromCart(product) : removeFromCart(product);
                    }}
                  >
                    -
                  </button>
                  <p className="mx-2 text-gray-600">{cartItems.find((item) => item.id === product.id).quantity}</p>
                  <button
                    className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => addToCart(product)}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}














// import React from 'react';
// import { connect } from 'react-redux';
// import { toggleLanguage } from '../actions/languageActions';
// import { useNavigate } from 'react-router-dom';
// import data from '../assets/Data/sudha-data.json';
// import bulkShakti from '../assets/bulk-shakti.jpg';
// import bulkShaktiMilk from '../assets/bulk-shakti-milk.jpg';

// const Sudhadairy = ({ language, toggleLanguage }) => {
//   const navigate = useNavigate();
//   const {
//     welcome,
//     sudhaDairy,
//     discoverText,
//     ourDairyDelights,
//     specialOrders,
//     deliveryCommitment,
//     products,
//   } = data;

//   const getLocalizedString = (obj) => (language === 'english' ? obj.english : obj.hindi);
  
//   return (
//     <div className="contact-container p-8 bg-slate-700">
//       <button className="btn bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mb-6" onClick={() => navigate(-1)}>
//         Go Back
//       </button>

//       <div className="contact-content bg-white p-8 rounded-lg shadow-md text-center">
//         <h2 className="text-3xl font-bold mb-8">
//           {`${getLocalizedString(welcome)} `}
//           <span className="text-indigo-600">{getLocalizedString(sudhaDairy)}</span>
//         </h2>

//         <p className="text-gray-700 mt-4">{getLocalizedString(discoverText)}</p>

//         <h3 className="text-2xl font-bold mt-8 mb-4">{getLocalizedString(ourDairyDelights)}</h3>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Sudha Dairy Products */}
//           {products.map((product, index) => (
//             <div key={index} className="product-card bg-gray-100 w-fit p-4 rounded-lg shadow-md text-center">
//               <img
//                 src={product.image === 'bulk-shakti' ? bulkShakti : bulkShaktiMilk}
//                 alt={getLocalizedString(product.name)}
//                 className="product-image h-40 object-cover rounded-lg shadow-md mx-auto mb-4"
//               />
//               <h4 className="text-lg font-bold text-indigo-600 mb-2">{getLocalizedString(product.name)}</h4>
//               <p className="text-gray-700">{getLocalizedString(product.description)}</p>
//             </div>
//           ))}
//         </div>
//         <h3 className="text-2xl font-bold mt-8 mb-4">{getLocalizedString(specialOrders)}</h3>

//         <p className="text-gray-700 mt-4">{getLocalizedString(deliveryCommitment)}</p>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   language: state.language.language,
// });

// const mapDispatchToProps = {
//   toggleLanguage,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Sudhadairy);
