// Error404.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <button className="btn" onClick={() => Navigate(-1)}>
        Go Back
      </button>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default Error404;
