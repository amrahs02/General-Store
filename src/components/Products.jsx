import { useContext } from 'react';
import { CartContext } from '../context/cart.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import productData from '../assets/Data/data.json';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

export default function Products() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const notifyAddedToCart = (item) =>
    toast.success(`${item.title} added to cart!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      style: {
        backgroundColor: '#41D8B3',
        color: '#fff',
      },
    });

  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.title} removed from cart!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      style: {
        backgroundColor: '#EF4444',
        color: '#fff',
      },
    });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  return (
    <div className=" bg-gray-100 min-h-screen">
      <ToastContainer />

      <div className="flex justify-between items-center  bg-blue-500 text-white">
        <h1 className="text-2xl uppercase font-bold mt-2 mb-2">Shop</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 py-8">

        {/* for every product */}
        {productData.products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-6">
            <img src={product.thumbnail} alt={product.title} className="rounded-md w-52 h-40 object-cover mb-4" />

            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">{product.title}</h1>
              <p className="mt-2 text-gray-600 text-sm">{product.description.slice(0, 40)}...</p>
              <p className="mt-2 text-gray-600">${product.price}</p>
            </div>


            {/* add to cart button */}
            <div className="mt-4 flex justify-between items-center">
              {!cartItems.find((item) => item.id === product.id) ? (
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold uppercase hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    addToCart(product);
                    notifyAddedToCart(product);
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
                      if (cartItem.quantity === 1) {
                        handleRemoveFromCart(product);
                      } else {
                        removeFromCart(product);
                      }
                    }}
                  >
                    -
                  </button>
                  <p className="mx-2 text-gray-600">{cartItems.find((item) => item.id === product.id).quantity}</p>
                  <button
                    className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      addToCart(product);
                    }}
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
