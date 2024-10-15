// YourComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from './LanguageSlice';
import { LanguageOutlined } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const YourComponent = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.currentLanguage);

  const handleToggle = () => {
    dispatch(toggleLanguage());
    const newLanguage = currentLanguage === 'english' ? 'hindi' : 'english';
    if (!toast.isActive('languageChange')) {
      showToast(`Language changed to ${newLanguage}`);
    }
  };

  

  const showToast = (message) => {
    toast.success(message, { position: toast.POSITION.TOP_RIGHT });
  };

  return (
    <>
      <button
        className='bg-blue-500 px-4 py-2 rounded-2xl'
        onClick={handleToggle}
        style={{ cursor: 'pointer' }}
      >
        <LanguageOutlined />
      </button>
      <ToastContainer />
    </>
  );
};

export default YourComponent;
