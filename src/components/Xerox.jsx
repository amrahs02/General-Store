import React from 'react';
import { useNavigate } from 'react-router-dom';
import specialOfferImage from '../assets/special-offer-3.png';
import aadharCardImage from '../assets/aadhaar-card.png';
import namesData from '../assets/Data/Names.json'; // Import the JSON file


const Xerox = () => {
  const Navigate = useNavigate();

  const openWhatsApp = () => {
    window.open('https://wa.me/918227080520', '_blank');
  };

  const sendEmail = () => {
    window.location.href = 'mailto:sandeepsharma2183@gmail.com';
  };

  return (
    <div className="  xerox,-container p-8 bg-slate-700 text-white">
      <button
        className="btn bg-blue-700 hover:bg-blue-900 font-bold py-2 px-4 mb-6"
        onClick={() => Navigate(-1)}
      >
        Go Back
      </button>

      <div className="xerox-content bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-500 bg-opacity-25 bg-blue-100 p-4 rounded">
          Welcome to <span className="block">{namesData.shopName}</span>
        </h1>

        <p className="text-gray-700 text-lg mb-6 bg-opacity-25 bg-gray-200 p-4 rounded">
          Discover the power of seamless documentation at{' '}
          <span className="font-bold text-blue-500">{namesData.shopName}</span>. We offer a range of   <span className="text-purple-500">xerox</span>, services with attractive   <span className="text-green-500">discounts</span>, for various documents.
        </p>

        {/* Additional Xerox Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-6 relative p-4 rounded" style={{
            // backgroundImage: `url(${specialOfferImage})`,
            backgroundSize: 'cover',
            minHeight: '200px',
          }}>
            <div className="absolute top-0 right-0 bottom-0 overflow-hidden left-0 bg-red-100 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded">
              <p className="text-yellow-500 font-bold mb-2">Special Offer!</p>
              <p className="text-gray-800 text-xl ">
                Get a   <span className="text-green-500">discount</span>, on  <span className="text-purple-500">bulk xerox</span>, for educational materials, notes, and study guides. We   <span className="text-purple-500">xerox</span>, any number of copies you want to make your learning experience more convenient.
              </p>
            </div>
          </div>

          <div className="mb-6 relative p-4  rounded" style={{
            // backgroundImage: `url(${aadharCardImage})`,
            backgroundSize: 'cover',
            minHeight: '200px',
          }}>
            <div className="absolute top-0 right-0 overflow-hidden bottom-0 left-0 bg-green-100 text-red-800 bg-opacity-70 backdrop-filter backdrop-blur-sm p-6 rounded">
              <p className="font-bold mb-2 bg-opacity-50 rounded">
                Document Xerox
              </p>
              <p className="text-gray-800 text-xl ">
                Need copies of your important documents? We provide   <span className="text-purple-500">xerox</span>, services for documents such as
                <span className="text-red-500"> Aadhar cards</span>,
                <span className="text-green-500"> PAN cards</span>,
                <span className="text-yellow-500"> certificates</span>,
                <span className="text-purple-500"> KYC forms</span>, and more.
                Fast and reliable service guaranteed.
              </p>
            </div>
          </div>


          <div className="mb-6 relative p-4 rounded" style={{
            // backgroundImage: `url(${aadharCardImage})`,
            backgroundSize: 'cover',
            minHeight: '200px',
          }}>
            <div className="absolute top-0 right-0 bottom-0 overflow-hidden left-0 bg-purple-100 text-purple-600 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded">
              <p className="font-bold mb-2 bg-opacity-50 rounded">
                Document Xerox
              </p>
              <p className="text-gray-800 text-xl ">
                Need copies of your important documents? We provide   <span className="text-purple-500">xerox</span>, services for documents such as
                <span className="text-red-500"> Aadhar cards</span>,
                <span className="text-green-500"> PAN cards</span>,
                <span className="text-yellow-500"> certificates</span>,
                <span className="text-purple-500"> KYC forms</span>, and more.
                Fast and reliable service guaranteed.
              </p>
            </div>
          </div>
        </div>

        {/* Document Submission Options */}
        <div className="document-submission mt-8 bg-opacity-25 text-purple-700 p-8 rounded">
          <h2 className="text-2xl font-bold mb-4">Submit Your Documents</h2>
          <p className="text-gray-700 mb-4">
            Choose your preferred method to submit documents:
          </p>

          <button
            className="btn bg-green-500 hover:bg-green-700 py-3 px-4 m-2  rounded-full text-white mr-4"
            onClick={openWhatsApp}
          >
            Submit via WhatsApp
          </button>

          <button
            className="btn bg-blue-500 py-3 px-4  rounded-full hover:bg-blue-700 text-white"
            onClick={sendEmail}
          >
            Submit via Email
          </button>
        </div>


      </div>
    </div >
  );
};

export default Xerox;
