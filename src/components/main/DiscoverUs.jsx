import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import shopData from '../../assets/Data/Names.json';
import Breadcrumb from '../Others/BreadCrumb';

const DiscoverUs = () => {
  const currentLanguage = useSelector((state) => state.language.currentLanguage);

  // Language-specific content
  const languageContent = {
    english: {
      welcome: 'Welcome to',
      explore: 'Explore a world of distinction and convenience at',
      ourCollections: 'Our Collections',
      premiumDairy: '1. Premium Dairy',
      sweetTreats: '2. Sweet Treats',
      curatedCollection: '3. Curated Collection',
      giftIdeas: '4. Gift Ideas',
      rechargeAndSimCards: '5. Phone Recharge and SIM Cards',
      contactUs: 'Contact Us',
      visitUsAt: 'Visit us at',
      callUsAt: 'Call us at',
      emailUsAt: 'Email us at',
      connectWithUs: 'Connect with us on social media:',
    },
    hindi: {
      welcome: 'आपका स्वागत है',
      explore: 'विभिन्नता और सुविधा की दुनिया की खोज करें',
      ourCollections: 'हमारी संग्रह',
      premiumDairy: '1. प्रीमियम डेयरी',
      sweetTreats: '2. मिठा आनंद',
      curatedCollection: '3. क्यूरेटेड कलेक्शन',
      giftIdeas: '4. उपहार विचार',
      rechargeAndSimCards: '5. फ़ोन रिचार्ज और सिम कार्ड',
      contactUs: 'संपर्क करें',
      visitUsAt: 'हमें इस पर देखें',
      callUsAt: 'हमें इस पर कॉल करें',
      emailUsAt: 'हमें इस पर ईमेल करें',
      connectWithUs: 'हमसे सोशल मीडिया पर जुड़ें:',
    },
  };

  // Use the appropriate language content based on the selected language
  const content = languageContent[currentLanguage];

  return (
    <div className="discover-us-container bg-slate-700">
      <Breadcrumb />

      <div className="discover-us-content bg-slate-70  my-2 rounded-xl text-center">
        <h1 className="text-4xl font-bold mb-6 bg-slate-800 text-blue-500  p-4 rounded-xl">
          <span className='text-sm'>{content.welcome}</span> <span className="block">{shopData.shopName}</span>
        </h1>

        <p className="text-gray-300 bg-slate-800 text-lg mb-6 p-4 rounded-xl">
          {content.explore}{' '}
          <span className="font-bold">{shopData.shopName}</span>. {content.explore}{' '}
          
        </p>
        <h1 className="text-4xl font-bold mb-4 bg-slate-800 text-gray-300  p-4 rounded-xl">
          <h1 className='text-lg'>{content.ourCollections}</h1>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className=" bg-slate-800 p-4 rounded-xl">
            <p className="text-green-500 font-bold mb-2">{content.premiumDairy}</p>
            <p className="text-gray-300">
              Fresh <span className="text-yellow-500">milk</span>, rich <span className="text-red-500">paneer</span>, curd, ghee and more.
            </p>
          </div>

          <div className=" bg-slate-800 p-4 rounded-xl">
            <p className="text-red-500 font-bold mb-2">{content.sweetTreats}</p>
            <p className="text-gray-300">
              Indulge in exquisite <span className="text-red-500">GulabJamun</span>, Chamcham, Sudha Fresh Surbhi Rabri  and more.
            </p>
          </div>

          <div className=" bg-slate-800 p-4 rounded-xl">
            <p className="font-bold text-blue-500 mb-2">{content.curatedCollection}</p>
            <p className="text-gray-300">
              From durable bottles to premium stationery, discover unique gifts and essentials for your home and office.
            </p>
          </div>

          <div className=" bg-slate-800 p-4 rounded-xl">
            <p className="text-purple-500 font-bold mb-2">{content.giftIdeas}</p>
            <p className="text-gray-300">
              Find perfect gifts for your loved ones. Explore our collection of premium chocolates, sweets, and more.
            </p>
          </div>
        </div>

        <div className=" p-4 my-4 bg-slate-800  rounded-xl">
          <p className="text-yellow-500 font-bold mb-2">{content.rechargeAndSimCards}</p>
          <p className="text-gray-300">
            Instantly recharge your phone and get discounted SIM cards with good validity for Jio and Airtel.
          </p>
        </div>

        {/* Contact Details */}
        <div className="contact-section mt-8  bg-slate-800 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">{content.contactUs}</h2>
          <p className="text-gray-300">
            {content.visitUsAt}{' '}
            <span className="font-bold text-blue-500">{shopData.address}, {shopData.city}, {shopData.state}, {shopData.pincode}</span>
            <br />
            {content.callUsAt}{' '}
            <span className="font-bold text-blue-500">{shopData.phoneNumber}</span>
            <br />
            {content.emailUsAt}{' '}
            <span className="font-bold text-blue-500">{shopData.email}</span>
          </p>

          {/* Social Media Links */}
          <div className="social-media-links mt-6">
            <p className="text-gray-300">{content.connectWithUs}</p>
            <ul className="list-disc ml-6 text-blue-500">
              <li>
                <a href={`https://${shopData.facebookLink}`} className="hover:underline" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href={`https://${shopData.twitterLink}`} className="hover:underline" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href={`https://${shopData.instagramLink}`} className="hover:underline" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverUs;
