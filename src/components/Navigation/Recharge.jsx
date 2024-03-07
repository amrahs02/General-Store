import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLanguage } from '../../LanguageToggle/LanguageSlice';
import BreadCrumb from '../Others/BreadCrumb';
import Header from '../Others/Header';

const Recharge = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.currentLanguage);

  const handleToggle = () => {
    dispatch(toggleLanguage());
  };

  // Language-specific content
  const languageContent = {
    english: {
      exclusiveOffers: 'Exclusive Recharge Offers',
      rechargeDescription:
        'Recharge with us and enjoy exclusive benefits on Jio, Airtel, and Vi networks. Don\'t miss out on our special offers available from 7 AM to 9 PM daily!',
      rechargeHeading: 'Recharge Offers',
      jioOffer: 'Jio Recharge Offer',
      jioOfferDescription: 'Enjoy exclusive benefits on Jio recharges between 7 AM and 9 PM. Don\'t miss out on these exciting offers!',
      airtelOffer: 'Airtel Recharge Offer',
      airtelOfferDescription: 'Avail special benefits on Airtel recharges during the specified time window. Recharge now and save big!',
      viOffer: 'Vi Recharge Offer',
      viOfferDescription: 'Exclusive offers on Vi recharges from 7 AM to 9 PM every day! Recharge now and enjoy the perks.',
      newSimCard: 'Get a New SIM Card',
      newSimCardDescription: 'Purchase a new SIM card with data and unlimited calls for 30 days absolutely free! Limited-time offer.',
      rechargeFromHome: 'Recharge from Home',
      rechargeFromHomeDescription: 'Contact Us on WhatsApp to recharge from the comfort of your home.',
      moreServices: 'More Services Await You',
      moreServicesDescription: 'Explore additional services such as bill payments, mobile top-ups, and more. We provide hassle-free solutions to meet all your communication needs.',
      importantNote: 'Important Note',
      importantNoteDescription: 'The mentioned offer is a company service for hassle-free recharges on Jio, Airtel, and Vi networks from 7 AM to 9 PM daily. It does not include additional discounts.',
    },
    hindi: {
      exclusiveOffers: 'विशेष Recharge प्रस्तुत',
      rechargeDescription:
        'हमारे साथ Recharge करें और Jio, Airtel, और Vi नेटवर्क्स पर विशेष लाभ प्राप्त करें। 7 से 9 बजे तक उपलब्ध हमारे विशेष प्रस्तावों का लाभ उठाएं!',
      rechargeHeading: 'Recharge प्रस्ताव',
      jioOffer: 'Jio Recharge प्रस्ताव',
      jioOfferDescription: '7 से 9 बजे तक Jio Recharge पर विशेष लाभ प्राप्त करें। इन रोमांचक प्रस्तावों को मत दें!',
      airtelOffer: 'Airtel Recharge प्रस्ताव',
      airtelOfferDescription: 'निर्दिष्ट समय सीमा के दौरान Airtel Recharge पर विशेष लाभ हासिल करें। अब Recharge करें और बचत करें!',
      viOffer: 'Vi Recharge प्रस्ताव',
      viOfferDescription: 'हर दिन सुबह 7 बजे से शाम 9 बजे तक Vi Recharge पर विशेष प्रस्ताव! अब Recharge करें और लाभ उठाएं।',
      newSimCard: 'नया SIM कार्ड प्राप्त करें',
      newSimCardDescription: '30 दिन के लिए डेटा और असीमित कॉल्स के साथ एक नए SIM कार्ड को बिलकुल मुफ्त में प्राप्त करें! सीमित समय की पेशकश।',
      rechargeFromHome: 'घर से Recharge करें',
      rechargeFromHomeDescription: 'घर की आराम से Recharge के लिए हमसे WhatsApp पर संपर्क करें।',
      moreServices: 'और सेवाएं आपका इंतजार कर रही हैं',
      moreServicesDescription: 'बिल भुगतान, मोबाइल टॉप-अप्स, और अधिक जैसी अतिरिक्त सेवाओं का अन्वेषण करें। हम सभी आपकी संवाद की आवश्यकताओं को पूर्ण करने के लिए परेशानी मुक्त समाधान प्रदान करते हैं।',
      importantNote: 'महत्वपूर्ण नोट',
      importantNoteDescription: 'उल्लिखित प्रस्ताव एक कंपनी सेवा है जो रोज 7 से 9 बजे तक Jio, Airtel, और Vi नेटवर्क्स पर परेशानी मुक्त Recharge के लिए है। इसमें अतिरिक्त डिस्काउंट शामिल नहीं हैं।',
    },
  };

  // Use the appropriate language content based on the selected language
  const content = languageContent[currentLanguage];

  const openWhatsApp = () => {
    window.open('https://wa.me/918227080520', '_blank');
  };

  return (
    <div className="recharge-container p-0 m-4 sm:m-10 text-white">
      <BreadCrumb />
      <Header />

      <div className="recharge-content rounded-xl shadow-md text-center">
        <h1 className="text-4xl font-bold mb-6 bg-slate-800 text-blue-500 p-4 rounded-xl">
          {content.exclusiveOffers}
        </h1>

        <p className="text-gray-300 bg-slate-800 text-lg mb-6 p-4 rounded-xl">
          {content.rechargeDescription}
        </p>

        <h2 className="text-gray-300 bg-slate-800 w-full text-2xl my-4 rounded-xl p-4 font-bold">
          {content.rechargeHeading}
        </h2>

        {/* Jio Recharge Offer */}
        <div className="relative rounded-xl" style={{ backgroundSize: 'cover', minHeight: '200px' }}>
          <div className="absolute top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-red-600 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
            <p className="font-bold mb-2 bg-opacity-50 rounded-xl">{content.jioOffer}</p>
            <p className="text-gray-300 text-xl">{content.jioOfferDescription}</p>
          </div>
        </div>

        {/* Airtel Recharge Offer */}
        <div className="flex w-full gap-4">
          <div className="relative rounded-xl" style={{ backgroundSize: 'cover', minHeight: '200px' }}>
            <div className="mt-4 top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-green-600 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
              <p className="font-bold mb-2 bg-opacity-50 rounded-xl">{content.airtelOffer}</p>
              <p className="text-gray-300 text-xl">{content.airtelOfferDescription}</p>
            </div>
          </div>

          {/* Vi Recharge Offer */}
          <div className="relative rounded-xl" style={{ backgroundSize: 'cover', minHeight: '200px' }}>
            <div className="mt-4 top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-purple-600 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
              <p className="font-bold mb-2 bg-opacity-50 rounded-xl">{content.viOffer}</p>
              <p className="text-gray-300 text-xl">{content.viOfferDescription}</p>
            </div>
          </div>
        </div>

        {/* Get a New SIM Card */}
        <h2 className="text-gray-100 bg-slate-800 w-full text-2xl my-4 rounded-xl p-4 font-bold">{content.newSimCard}</h2>
        <div className="relative rounded-xl" style={{ backgroundSize: 'cover', minHeight: '200px' }}>
          <div className="absolute top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
            <p className="font-bold text-gray-300 mb-2 bg-opacity-50 rounded-xl">{content.newSimCard}</p>
            <p className="text-gray-300 text-xl">{content.newSimCardDescription}</p>
          </div>
        </div>

        {/* Recharge from Home */}
        <h2 className="text-gray-300 bg-slate-800 w-full text-2xl my-4 rounded-xl p-4 font-bold">{content.rechargeFromHome}</h2>
        <div className="document-submission w-full bg-slate-800 text-green-700 p-8 rounded-xl">
          <h2 className="text-xl font-bold mb-4">{content.rechargeFromHome}</h2>
          <button
            className="btn bg-green-500 hover:bg-green-700 py-3 px-4 m-2 rounded-full text-white"
            onClick={openWhatsApp}
          >
            {content.rechargeFromHomeDescription}
          </button>
        </div>

        {/* Additional Content */}
        <h2 className="text-gray-300 bg-slate-800 w-full text-2xl my-4 rounded-xl p-4 font-bold">{content.moreServices}</h2>
        <div className="relative rounded-xl" style={{ backgroundSize: 'cover', minHeight: '200px' }}>
          <div className="absolute top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
            <h2 className="text-xl font-bold text-gray-300 mb-4">{content.moreServices}</h2>
            <p className="text-gray-300 mb-4">{content.moreServicesDescription}</p>
          </div>
        </div>

        {/* Important Note */}
        <h2 className="text-gray-300 bg-slate-800 w-full text-2xl my-4 rounded-xl p-4 font-bold">{content.importantNote}</h2>
        <div className="relative rounded-xl" style={{ backgroundSize: 'cover', minHeight: '200px' }}>
          <div className="absolute top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
            <h2 className="text-xl font-bold text-gray-300 mb-4">{content.importantNote}</h2>
            <p className="text-gray-300 mb-4">{content.importantNoteDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
