import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className=" contact-container p-8 bg-slate-700">
      <button
        className="btn bg-blue-500  hover:bg-blue-700  text-white font-bold py-2  px-4 mb-6"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <div className='contact-content bg-white rounded-lg shadow-md text-center' >
        <div className='text-center p-10  flex items-center justify-center flex-col ' >
          <h1 className="text-4xl font-bold mb-2 text-red-500">404 - Not Found</h1>
          <p className="text-gray-700 mb-6">Sorry, the page you are looking for does not exist.</p>
          {/* You can add additional content or styling as needed */}
        </div>
      </div>
    </div >
  );
};

export default Error404;
