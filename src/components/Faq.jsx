import React from 'react';
import { connect } from 'react-redux';
import { toggleLanguage } from '../actions/languageActions';
import faqData from '../assets/Data/faq-data.json'; // Adjust the path accordingly
import { useNavigate } from 'react-router-dom';
import BackButton from './Navigation/BackButton';

const FAQComponent = ({ language, toggleLanguage }) => {
  const navigate = useNavigate();
  const { questions } = faqData;

  const getLocalizedString = (obj) => (language === 'english' ? obj.english : obj.hindi);

  return (
    <div className="faq-container p-8 bg-gray-100">
       <BackButton/>

      <div className="faq-content  bg-white font-sans p-8 rounded-lg shadow-md ">
        <h2 className="text-3xl font-bold mb-8">{getLocalizedString(questions.welcome)}</h2>

        {questions.qa.map((qa, index) => (
          <div key={index} className="faq-item mb-6">
            <h4 className="text-lg font-medium mb-2">{getLocalizedString(qa.question)}</h4>
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
