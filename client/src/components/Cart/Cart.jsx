import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, removeItem, incrementItem, decrementItem } from '../../LanguageToggle/cartSlice';

const Cart = () => {
    const { isCartOpen, cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleCloseCart = (close) => {
        dispatch(toggleCart(close));
    };

    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };

    useEffect(() => {
        const docBody = document.body;
        isCartOpen ? docBody.classList.add('overflow-hidden') : docBody.classList.remove('overflow-hidden');
    }, [isCartOpen]);

    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            {isCartOpen && (
                <div id="cart" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg overflow-hidden w-96">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Cart <small>({cartQuantity})</small></h2>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => handleCloseCart(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4">
                            {cartQuantity === 0 ? (
                                <h2 className="text-gray-600">Cart is empty</h2>
                            ) : (
                                cartItems.map((item) => (
                                    <div className="flex justify-between items-center mb-4" key={item.id}>
                                        <div className="flex items-center space-x-4">
                                            <img src={item.img} alt="product-img" className="w-16 h-16 object-cover" />
                                            <div>
                                                <h4 className="text-lg font-semibold">{item.title}</h4>
                                                <p className="text-gray-600">₹ {item.price.toLocaleString()}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <button className="text-gray-600" onClick={() => handleDecrement(item.id)}>-</button>
                                            <p>{item.quantity}</p>
                                            <button className="text-gray-600" onClick={() => handleIncrement(item.id)}>+</button>
                                        </div>
                                        <button className="text-gray-600" onClick={() => handleRemove(item.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="p-4 border-t border-gray-200 flex justify-between items-center">
                            <h3 className="text-lg font-semibold"><small>Total:</small> ₹ {cartTotal.toLocaleString()}</h3>
                            <button className={`text-white bg-blue-500 px-4 py-2 rounded ${cartQuantity === 0 ? 'cursor-not-allowed bg-gray-400' : 'hover:bg-blue-700'}`}>Checkout</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
