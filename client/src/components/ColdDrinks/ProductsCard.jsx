import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../LanguageToggle/cartSlice';

const ProductsCard = (props) => {
    const { img, rating, title, price } = props;
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const item = { ...props };
        dispatch(addItem(item));

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    };

    const handleIncrement = () => {

    }

    const handleDecrement = () => {
                
        }


    const Quantity = 0;
    const id = 0;

    

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={img} alt="item-img" className="w-full" />
            <div className="p-4">
                <strong className="block text-gray-800 font-semibold">{rating}</strong>
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <h3 className="text-gray-700 font-semibold mb-2">₹ {price.toLocaleString()}</h3>
                <div>
                    <span onClick={handleDecrement(id)}>
                        +
                    </span>
                    <b>
                        {Quantity}
                    </b>
                    <span onClick={handleIncrement(id)}>
                        -
                    </span>
                </div>
                <button
                    type="button"
                    className={`bg-blue-500 text-white py-2 px-4 rounded ${isAdded ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                    onClick={handleAddToCart}
                    disabled={isAdded}
                >
                    {isAdded ? 'Added' : 'Add to cart'}
                </button>
            </div>
        </div>
    );
};

export default ProductsCard;
