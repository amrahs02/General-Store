import React from 'react';
import { useNavigate } from 'react-router-dom';
import shopInfo from '../assets/Data/Names.json'; // Adjust the path based on your project structure
import BreadCrumb from './Others/BreadCrumb';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-container p-8 bg-slate-700">\
      <BreadCrumb />
      <div>this is page is in Under Construction</div>

    </div>
  );
};

export default Contact;
