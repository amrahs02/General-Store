// Recharge.jsx

import BreadCrumb from '../Others/BreadCrumb';
import Header from '../Others/Header';

const Recharge = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/918227080520', '_blank');
  };

  return (
    <div className="recharge-container p-0 m-4 sm:m-10  text-white">
      <BreadCrumb />
      <Header />

      <div className="recharge-content  rounded-xl shadow-md text-center">
        <h1 className="text-4xl font-bold mb-6 bg-slate-800 text-blue-500 p-4 rounded-xl">
          Exclusive Recharge Offers
        </h1>

        <p className="text-gray-300 bg-slate-800 text-lg mb-6 p-4 rounded-xl">
          Recharge with us and enjoy exclusive benefits on Jio, Airtel, and Vi networks. Don't miss out on our special offers available from 7 AM to 9 PM daily!
        </p>

        {/* Recharge Offers */}
        <h2 className='text-gray-300 bg-slate-800 w-full text-2xl my-4 rounded-xl p-4 font-bold'>Recharge Offers</h2>

        <div className="">
          {/* Jio Recharge Offer */}
          <div className="relative rounded-xl" style={{
            backgroundSize: 'cover',
            minHeight: '200px',
          }}>
            <div className="absolute top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-red-600 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
              <p className="font-bold mb-2 bg-opacity-50 rounded-xl">
                Jio Recharge Offer
              </p>
              <p className="text-gray-300 text-xl">
                Enjoy exclusive benefits on Jio recharges between 7 AM and 9 PM. Don't miss out on these exciting offers!
              </p>
            </div>
          </div>
        </div>

        {/* Airtel Recharge Offer */}

        <div className='flex w-full gap-4 ' >
          <div className="relative rounded-xl" style={{
            backgroundSize: 'cover',
            minHeight: '200px',
          }}>
            <div className="mt-4 top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-green-600 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
              <p className="font-bold mb-2 bg-opacity-50 rounded-xl">
                Airtel Recharge Offer
              </p>
              <p className="text-gray-300 text-xl">
                Avail special benefits on Airtel recharges during the specified time window. Recharge now and save big!
              </p>
            </div>
          </div>

          {/* Vi Recharge Offer */}
          <div className="relative rounded-xl" style={{
            backgroundSize: 'cover',
            minHeight: '200px',
          }}>
            <div className="mt-4 top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-purple-600 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
              <p className="font-bold mb-2 bg-opacity-50 rounded-xl">
                Vi Recharge Offer
              </p>
              <p className="text-gray-300 text-xl">
                Exclusive offers on Vi recharges from 7 AM to 9 PM every day! Recharge now and enjoy the perks.
              </p>
            </div>
          </div>
        </div>
        {/* SIM Card Special */}
        <h2 className='text-gray-100 bg-slate-800 w-full text-2xl my-4 rounded-xl p-4 font-bold'>Get a New SIM Card</h2>
        <div className="relative rounded-xl" style={{
          backgroundSize: 'cover',
          minHeight: '200px',
        }}>
          <div className="absolute top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
            <p className="font-bold text-gray-300 mb-2 bg-opacity-50 rounded-xl">
              Get a New SIM Card
            </p>
            <p className="text-gray-300 text-xl">
              Purchase a new SIM card with data and unlimited calls for 30 days absolutely free! Limited-time offer.
            </p>
          </div>
        </div>

        {/* Recharge from Home */}
        <h2 className='text-gray-300 bg-slate-800 w-full text-2xl my-4 rounded-xl p-4 font-bold'>Recharge from Home</h2>
        <div className="document-submission w-full bg-slate-800 text-green-700 p-8 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Recharge from Home</h2>
          <button
            className="btn bg-green-500 hover:bg-green-700 py-3 px-4 m-2 rounded-full text-white"
            onClick={openWhatsApp}
          >
            Contact Us on WhatsApp
          </button>
        </div>

        {/* Additional Content */}
        <h2 className='text-gray-300 bg-slate-800 w-full text-2xl my-4 rounded-xl p-4 font-bold'>More Services Await You</h2>
        <div className="relative rounded-xl" style={{
          backgroundSize: 'cover',
          minHeight: '200px',
        }}>
          <div className="absolute top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
            <h2 className="text-xl font-bold text-gray-300 mb-4">More Services Await You</h2>
            <p className="text-gray-300 mb-4">
              Explore additional services such as bill payments, mobile top-ups, and more. We provide hassle-free solutions to meet all your communication needs.
            </p>
          </div>
        </div>

        {/* Note about the Offer */}
        <h2 className='text-gray-300 bg-slate-800 w-full text-2xl my-4 rounded-xl p-4 font-bold'>Important Note</h2>
        <div className="relative rounded-xl" style={{
          backgroundSize: 'cover',
          minHeight: '200px',
        }}>
          <div className="absolute top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
            <h2 className="text-xl font-bold text-gray-300 mb-4">Important Note</h2>
            <p className="text-gray-300 mb-4">
              The mentioned offer is a company service for hassle-free recharges on Jio, Airtel, and Vi networks from 7 AM to 9 PM daily. It does not include additional discounts.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Recharge;
