import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';


const UnderConstruction = () => {
    return (
        <div className="bg-slate-500 flex items-center justify-center">
            <div className="text-center m-10">
                <FontAwesomeIcon icon={faTools} className="text-6xl text-gray-100" />
                <h1 className="text-3xl font-semibold text-gray-200 mt-4">Website Under Construction</h1>
                <p className="text-gray-200 mt-2">All features are coming soon!</p>
            </div>
        </div>
    );
};

export default UnderConstruction;
