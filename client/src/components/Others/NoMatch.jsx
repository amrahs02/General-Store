import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Error404 = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.currentLanguage);

  const toggleLanguage = () => {
    // Implement your language toggle logic here, similar to other components
    // dispatch(toggleLanguage());
  };

  // Language-specific content
  const languageContent = {
    english: {
      pageTitle: '404 - Not Found',
      errorMessage: "We apologize, but the page you're looking for doesn't exist. It might be under construction. Please check back soon.",
    },
    hindi: {
      pageTitle: '404 - नहीं मिला',
      errorMessage: "क्षमा करें, लेकिन वह page जो आप ढूंढ़ रहे हैं, मिला नहीं। शायद वह अभी बन रहा है। कृपया थोड़ी देर बाद पुन: प्रयास करें।",
    },
  };

  // Use the appropriate language content based on the selected language
  const content = languageContent[currentLanguage];

  return (
    <div className="error-container p-8 bg-slate-700 text-white">
      <div className="error-content bg-white rounded-2xl shadow-md text-center">
        <div className="p-10 flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold mb-2 text-red-500">{content.pageTitle}</h1>
          <p className="text-gray-700 mb-6">{content.errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
