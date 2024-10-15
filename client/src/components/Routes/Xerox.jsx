// // Assuming your language content is stored in the Redux store
// // You may need to adjust the actual structure based on your application's needs.

// // Import necessary libraries and components
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleLanguage } from '../../LanguageToggle/LanguageSlice';
// import BreadCrumb from '../Others/BreadCrumb';
// import Header from '../Others/Header';
// import spriteImage from '../../assets/images/sprite-2.jpg';
// import namesData from '../../assets/Data/Names.json';

// const Xerox = () => {
//   const dispatch = useDispatch();
//   const currentLanguage = useSelector((state) => state.language.currentLanguage);

//   const handleToggle = () => {
//     dispatch(toggleLanguage());
//   };

//   const openWhatsApp = () => {
//     window.open('https://wa.me/918227080520', '_blank');
//   };

//   const sendEmail = () => {
//     window.location.href = 'mailto:sandeepsharma2183@gmail.com';
//   };

//   // Language-specific content
//   const languageContent = {
//     english: {
//       welcomeMessage: `Welcome to ${namesData.shopName}`,
//       discoverMessage: `Discover the power of seamless documentation at ${namesData.shopName}. We offer a range of xerox services with attractive discounts, for various documents.`,
//       servicesHeading: 'Our Services',
//       documentXerox: 'Document Xerox',
//       documentTypes: 'Aadhar cards, PAN cards, and more.',
//       submissionOptionsHeading: 'Preferred method to submit docs for Printing',
//       submitDocuments: 'Submit Documents',
//       viaEmail: 'via Email',
//       viaWhatsApp: 'via WhatsApp',
//     },
//     hindi: {
//       welcomeMessage: `आपका स्वागत है ${namesData.shopName} में`,
//       discoverMessage: `${namesData.shopName} पर सुगम प्रलेखन की शक्ति की खोज करें। हम विभिन्न दस्तावेजों के लिए आकर्षक छूट के साथ xerox सेवाएं प्रदान करते हैं।`,
//       servicesHeading: 'हमारी सेवाएं',
//       documentXerox: 'दस्तावेज़ का क्षय',
//       documentTypes: 'आधार कार्ड, पैन कार्ड, और अधिक।',
//       submissionOptionsHeading: 'प्रिंटिंग के लिए दस्तावेज़ प्रस्तुत करने का पसंदीदा तरीका',
//       submitDocuments: 'दस्तावेज़ प्रस्तुत करें',
//       viaEmail: 'ईमेल के माध्यम से',
//       viaWhatsApp: 'व्हाट्सएप के माध्यम से',
//     },
//   };

//   // Use the appropriate language content based on the selected language
//   const content = languageContent[currentLanguage];

//   return (
//     <div className="xerox-container sm:m-10 p-0 text-white">
//       {/* Your existing content */}
//       <BreadCrumb />
//       <Header />
//       <div className="xerox-content bg-slate-700 rounded-2xl text-center">
//         <h1 className="text-4xl font-bold my-2 text-blue-500 bg-slate-800 p-4 rounded-2xl">
//           {content.welcomeMessage}
//         </h1>

//         <p className="text-gray-300 bg-slate-800 text-lg my-2 p-4 rounded-2xl">
//           {content.discoverMessage}
//         </p>

//         {/* Additional Xerox Services */}
//         <h2 className="text-gray-300 bg-slate-800 w-full text-2xl my-2 rounded-2xl p-4 font-bold">
//           {content.servicesHeading}
//         </h2>

//         {/* Render services content based on language */}
//         {/* ... (Your existing content) ... */}

//         {/* Document Submission Options */}
//         <h2 className="text-gray-300 bg-slate-800 w-full text-2xl my-2 rounded-2xl p-4 font-bold">
//           {content.submissionOptionsHeading}
//         </h2>
//         <div className="flex gap-2">
//           <div className="document-submission w-full bg-slate-800 text-gray-300 p-8 rounded-2xl">
//             <h2 className="text-xl font-bold mb-4">{content.submitDocuments}</h2>
//             <button
//               className="btn bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-2xl text-white"
//               onClick={sendEmail}
//             >
//               {content.viaEmail}
//             </button>
//           </div>

//           <div className="document-submission w-full bg-slate-800 text-gray-300 p-8 rounded-2xl">
//             <h2 className="text-xl font-bold mb-4">{content.submitDocuments}</h2>
//             <button
//               className="btn bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-2xl text-white"
//               onClick={openWhatsApp}
//             >
//               {content.viaWhatsApp}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Xerox;
