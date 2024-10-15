// import * as React from 'react';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import { Home, LocalDrink, MobileFriendlyTwoTone, Mouse, PhoneAndroid, Print, Store } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import { BiMouse } from 'react-icons/bi';

// export default function LabelBottomNavigation() {
//   const [value, setValue] = React.useState('');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     //background hover color change

//   };

//   return (
//     <div className='sm:!hidden !bg-slate-800 flex items-center justify-evenly rounded-t-xl w-full fixed bottom-0' value={value} onChange={handleChange}>
//       <Link to='/' className='relative  text-gray-300'>
//         <BottomNavigationAction
//           label="Home"
//           icon={
//             <Link to="/" className=' text-gray-300 rounded-2xl '>
//               <div className='bg-blue-500 rounded-2xl px-4 py-1' >

//                 <Home />
//               </div>
//               <h5>Home</h5>
//             </Link>}
//         />
//       </Link>
//       {/* <Link to='/dairy' className='relative  text-gray-300'>
//         <BottomNavigationAction
//           label="dairy"
//           icon={
//             <Link to="/dairy" className='text-gray-300    rounded-2xl '>
//               <div className='bg-blue-500 rounded-2xl px-4 py-1' >

//                 <Store />
//               </div>
//               <h5>Dairy</h5>

//             </Link>}
//         />
//       </Link> */}
//       <Link to='/gadgets' className='relative   text-gray-300'>
//         <BottomNavigationAction
//           label="Gadget"
//           icon={
//             <Link to="/gadgets" className='text-gray-300   rounded-2xl'>
//               <div className='bg-blue-500 rounded-2xl px-4 py-1' >

//                 <Mouse />
//               </div>
//               <h5>Gadgets</h5>

//             </Link>}
//         />
//       </Link>
//       <Link to='/smartphone' className='relative  text-gray-300'>
//         <BottomNavigationAction
//           label="Smartphone"
//           icon={
//             <Link to="/smartphone" className='text-gray-300   rounded-2xl '>
//               <div className='bg-blue-500 rounded-2xl px-4 py-1' >

//                 <MobileFriendlyTwoTone   />
//               </div>
//               <h5>Mobile</h5>

//             </Link>}
//         />
//       </Link>

//     </div>
//   );
// }
