import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from './LanguageSlice';
import { LanguageOutlined } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LanguageToggle = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.currentLanguage);

  //toast
  const showToast = (message) => {
    toast.success(message, { position: toast.POSITION.TOP_RIGHT });
  };

  //on button click
  const handleToggle = () => {
    dispatch(toggleLanguage());
    //part of toast
    const newLanguage = currentLanguage === 'english' ? 'hindi' : 'english';
    // Check if a toast is already open before showing a new one
    if (!toast.isActive('languageChange')) {
      showToast(`Language changed to ${newLanguage}`);
    }
  };


  
  return (
    <>
      <button
        className='bg-blue-500 px-4 py-2 rounded-full'
        onClick={handleToggle}
        style={{ cursor: 'pointer' }}
      >
        <LanguageOutlined />
      </button>
      <ToastContainer />
    </>
  );
};

export default LanguageToggle;
