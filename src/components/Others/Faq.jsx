// FAQComponent.jsx

import React from 'react';
import { connect } from 'react-redux';
import { toggleLanguage } from '../../actions/languageActions';
import data from '../../assets/Data/faq-data.json';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';

const FAQComponent = ({ language, toggleLanguage }) => {
  const navigate = useNavigate();
  const { questions } = data;

  const getLocalizedString = (obj) => (language === 'english' ? obj.english : obj.hindi);

  return (
    <div className="faq-container p-0 bg-gray-100 min-h-screen">
      <BreadCrumb/>
      <div className="faq-content bg-white p-2 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-indigo-600">{getLocalizedString(questions.welcome)}</h2>

        {questions.qa.map((qa, index) => (
          <div key={index} className="faq-item bg-gray-200 rounded-md p-4 mb-4">
            <h4 className="text-lg font-medium mb-2 text-gray-800">{getLocalizedString(qa.question)}</h4>
            <p className="text-gray-700">{getLocalizedString(qa.answer)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  language: state.language.language,
});

const mapDispatchToProps = {
  toggleLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(FAQComponent);
