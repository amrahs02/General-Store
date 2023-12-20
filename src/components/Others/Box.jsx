import React from 'react';

const Box = ({ name, description }) => {
  return (
    <section className="flex my-10 mx-6 justify-around text-white">
      <div className="m-5 text-center p-20 text-black bg-blue-500 hover:bg-blue-700 rounded-2xl">
        <h2>name</h2>
        <p>description</p>
      </div>
    </section>
  );
};

export default Box;
