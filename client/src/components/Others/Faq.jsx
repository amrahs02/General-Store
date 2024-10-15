import React from "react";
import { useSelector, useDispatch } from "react-redux";
import data from "../../assets/Data/faq-data.json";
import { toggleLanguage } from "../../LanguageToggle/LanguageSlice";
import BreadCrumb from "./BreadCrumb";

const FAQComponent = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const { questions } = data;

  // Function to toggle language
  const handleLanguageToggle = () => {
    dispatch(toggleLanguage());
  };

  return (
    <div className="faq-container p-2 bg-slate-800 m-2 sm:p-8 min-h-screen">
      <BreadCrumb />
      <div className="faq-content bg-slate-700 mt-4 p-4 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-8 bg-slate-800 p-4 text-center rounded-2xl text-indigo-600">
          Frequently Asked Questions
        </h2>
        {questions.qa.map((qa, index) => (
          <div
            key={index}
            className="faq-item bg-slate-800 text-white rounded-2xl p-4 mb-4"
          >
            <h3 className="text-xl font-bold mb-2">
              {currentLanguage === "hindi"
                ? qa.question.hindi
                : qa.question.english}
            </h3>
            <p>
              {currentLanguage === "hindi"
                ? qa.answer.hindi
                : qa.answer.english}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
