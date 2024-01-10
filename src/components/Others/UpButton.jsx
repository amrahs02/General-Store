// UpButton.js
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const UpButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show the button when the user has scrolled down, otherwise hide it
            setShowButton(window.scrollY > 100);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleUpClick = () => {
        // Logic to scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        // Conditionally render the button based on the showButton state
        showButton && (
            <button
                onClick={handleUpClick}
                className="fixed bottom-4 right-4 bg-blue-500 text-white px-8 py-4  rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
                <FontAwesomeIcon icon={faArrowUp} />
            </button>


        )
    );
};

export default UpButton;
