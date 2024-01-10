import namesData from '../../assets/Data/Names.json'; // Import the JSON file
import BreadCrumb from '../Others/BreadCrumb';
import spriteImage from '../../assets/images/sprite-2.jpg';  // Adjust the path accordingly

import Header from '../Others/Header';
const Xerox = () => {

  const openWhatsApp = () => {
    window.open('https://wa.me/918227080520', '_blank');
  };

  const sendEmail = () => {
    window.location.href = 'mailto:sandeepsharma2183@gmail.com';
  };

  return (
    <div className="  xerox-container sm:m-10 m-4 p-0 bg-slate-800 text-white">
      <BreadCrumb />
      <Header />
      <div className="xerox-content bg-slate-700 p-4 rounded-xl shadow-md text-center">
        <h1 className="text-4xl font-bold mb-6  text-blue-500  bg-slate-800 p-4  rounded-xl">
          Welcome to <span className="block">{namesData.shopName}</span>
        </h1>

        <p className="text-gray-300 bg-slate-800 text-lg mb-6 p-4 rounded-xl">
          Discover the power of seamless documentation at{' '}
          <span className="font-bold text-blue-500">{namesData.shopName}</span>. We offer a range of   <span className="text-purple-500">xerox</span>, services with attractive   <span className="text-green-500">discounts</span>, for various documents.
        </p>

        {/* Additional Xerox Services */}
        <h2 className='text-gray-300 bg-slate-800 w-full text-2xl my-4 rounded-xl p-4 font-bold'>Our Services</h2>

        <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className=" relative rounded-xl" style={{
            backgroundSize: 'cover',
            minHeight: '200px',
            backgroundImage: `url(${spriteImage})`,  // Set the background image
          }}>
            <div className="absolute top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-gray-300 bg-opacity-90 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
              <p className="font-bold mb-2 bg-opacity-50 rounded-xl" >
                Document Xerox
              </p>
              <p className="text-gray-300 text-xl ">

                <span className="text-red-500"> Aadhar cards</span>,
                <span className="text-green-500"> PAN cards</span>,
                and more.
              </p>
            </div>
          </div>

          <div className=" relative rounded-xl" style={{
            backgroundSize: 'cover',
            minHeight: '200px',
            backgroundImage: `url(${spriteImage})`,  // Set the background image
          }}>
            <div className="absolute top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-gray-300 bg-opacity-90 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
              <p className="font-bold mb-2 bg-opacity-50 rounded-xl">
                Document Xerox
              </p>
              <p className="text-gray-300 text-xl ">

                <span className="text-red-500"> Aadhar cards</span>,
                <span className="text-green-500"> PAN cards</span>,
                and more.
              </p>
            </div>
          </div>

        </div>
            
        <div className=" relative rounded-xl my-2" style={{
          backgroundSize: 'cover',
          minHeight: '200px',
        }}>
          <div className="absolute top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-gray-300 bg-opacity-90 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
            <p className="font-bold mb-2 bg-opacity-50 rounded-xl">
              Document Xerox
            </p>
            <p className="text-gray-300 text-xl ">

              <span className="text-red-500"> Aadhar cards</span>,
              <span className="text-green-500"> PAN cards</span>,
              and more.
            </p>
          </div>
        </div>

        {/* Document Submission Options */}
        <h2 className='text-gray-300 bg-slate-800 w-full text-2xl my-4 rounded-xl p-4 font-bold'>Preferred method to submit docs</h2>
        <div className='flex gap-2 '>
          <div className="document-submission  w-full bg-slate-800 text-gray-300 p-8 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Submit Documents</h2>
            <button
              className="btn bg-blue-500  hover:bg-blue-700 py-3 px-8 m-2  rounded-full text-white"
              onClick={sendEmail}
            >
              via Email
            </button>
          </div>

          <div className="document-submission  w-full bg-slate-800 text-gray-300 p-8 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Submit Documents</h2>
            <button
              className="btn bg-green-500 hover:bg-green-700 py-3 px-4 m-2  rounded-full text-white"
              onClick={openWhatsApp}
            >
              via WhatsApp
            </button>
          </div>
        </div>


      </div>
    </div >
  );
};

export default Xerox;
