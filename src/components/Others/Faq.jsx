// FAQComponent.jsx

import React from 'react';
import { connect } from 'react-redux';
import data from '../../assets/Data/faq-data.json';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';

const FAQComponent = () => {
  const navigate = useNavigate();
  const { questions } = data;


  return (
    <div className="faq-container p-2 bg-slate-800 m-2 sm:p-8 min-h-screen">
      <BreadCrumb />
      <div className="faq-content bg-slate-700 mt-4 p-4 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-8 bg-slate-800 p-4 text-center rounded-xl text-indigo-600">{getLocalizedString(questions.welcome)}</h2>

        {questions.qa.map((qa, index) => (
          <div key={index} className="faq-item bg-slate-800 text-white    rounded-xl p-4 mb-4">
            {/* <h4 className="text-lg font-medium mb-2 text-gray-200 ">{getLocalizedString(qa.question)}</h4> */}
            {/* <p className="text-gray-300">{getLocalizedString(qa.answer)}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};



export default FAQComponent;
