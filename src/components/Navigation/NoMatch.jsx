import React from 'react';
const Error404 = () => {

  return (
    <div className="error-container p-8 bg-slate-700 text-white">
      
      <div className='error-content bg-white rounded-lg shadow-md text-center'>
        <div className='p-10 flex items-center justify-center flex-col'>
          <h1 className="text-4xl font-bold mb-2 text-red-500">404 - Not Found</h1>
          <p className="text-gray-700 mb-6">
            We apologize, but the page you're looking for doesn't exist. It might be under construction. Please check back soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
