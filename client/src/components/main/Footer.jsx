import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';

const Footer = () => {
  const currentLanguage = useSelector((state) => state.language.currentLanguage);

  // Language-specific content
  const languageContent = {
    english: {
      explore: 'EXPLORE',
      home: 'Home',
      products: 'Products',
      contactUs: 'Contact Us',
      aboutUs: 'About Us',
      policies: 'POLICIES',
      faq: 'FAQ',
      termsConditions: 'Terms & Conditions',
      privacyPolicy: 'Privacy Policy',
      returnsRefunds: 'Returns & Refunds',
      connect: 'CONNECT',
      shopWithConfidence: 'Shop with confidence at General Store. We guarantee the authenticity of our products.',
      easyReturns: 'Easy returns within 14 days of receiving your order.',
      copyright: `&copy; ${new Date().getFullYear()} General Store. All rights reserved.`,
      qualityTrust: 'Quality you can trust. Visit us again soon!',
      designedDeveloped: 'Designed and Developed by',
      developerName: 'Sandeep Sharma',
    },
    hindi: {
      explore: 'खोजें',
      home: 'होम',
      products: 'उत्पाद',
      contactUs: 'संपर्क करें',
      aboutUs: 'हमारे बारे में',
      policies: 'नीतियां',
      faq: 'सामान्य प्रश्न',
      termsConditions: 'नियम और शर्तें',
      privacyPolicy: 'गोपनीयता नीति',
      returnsRefunds: 'वापसी और रिफंड',
      connect: 'जुड़ें',
      shopWithConfidence: 'आनुष्का जनरल स्टोर पर आत्मविश्वास से खरीदारी करें। हम हमारे उत्पादों की प्रामाणिकता की गारंटी देते हैं।',
      easyReturns: 'आपके आदेश प्राप्त करने के 14 दिनों के भीतर आसान रिटर्न।',
      copyright: ` ${new Date().getFullYear()} आनुष्का जनरल स्टोर। सभी अधिकार सुरक्षित हैं।`,
      qualityTrust: 'आप विश्वास कर सकते हैं। हमारी गुणवत्ता। जल्दी ही हमें फिर से देखें!',
      designedDeveloped: 'डिज़ाइन और विकसित किया गया है',
      developerName: 'संदीप शर्मा',
    },
  };

  // Use the appropriate language content based on the selected language
  const content = languageContent[currentLanguage];

  return (
    <footer className="bg-slate-800 rounded-s-3xl mb-24 sm:m-0  rounded-e-3xl text-white">
      <div className="container sm:mx-auto py-8 grid grid-cols-1 m-4 sm:p-10 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="md:mb-0">
          <h4 className="text-2xl font-bold mb-4">{content.explore}</h4>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:underline">{content.home}</Link>
            </li>
            <li className="mb-2">
              <Link to="/products" className="hover:underline">{content.products}</Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:underline">{content.contactUs}</Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:underline">{content.aboutUs}</Link>
            </li>
          </ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h4 className="text-2xl font-bold mb-4">{content.policies}</h4>
          <ul>
            <li className="mb-2">
              <Link to="/faq" className="hover:underline">{content.faq}</Link>
            </li>
            <li className="mb-2">
              <Link to="/terms" className="hover:underline">{content.termsConditions}</Link>
            </li>
            <li className="mb-2">
              <Link to="/privacy" className="hover:underline">{content.privacyPolicy}</Link>
            </li>
            <li className="mb-2">
              <Link to="/returns" className="hover:underline">{content.returnsRefunds}</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl font-bold mb-4">{content.connect}</h4>
          <div className="flex space-x-4 mb-4">
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <p className="mb-4 ">{content.shopWithConfidence}</p>
          <p>{content.easyReturns}</p>
        </div>
      </div>

      <div className="bg-slate-700 py-4 text-center">
        <p className="text-sm text-gray-400">{content.copyright}</p>
        <p className="text-sm text-gray-400">{content.qualityTrust}</p>
        <p className="text-sm text-gray-400">
          {content.designedDeveloped}{' '}
          <a href="https://amrahs.vercel.app" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">
            {content.developerName}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
