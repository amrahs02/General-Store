import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Home, LocalDrink, PhoneAndroid, Print, Store } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    //background hover color change

  };

  return (
    <div className='sm:!hidden !bg-slate-800 flex items-center justify-evenly rounded-t-xl w-full fixed bottom-0' value={value} onChange={handleChange}>
      <Link to='/' className='relative  text-gray-300'>
        <BottomNavigationAction
          label="Home"
          icon={
            <Link to="/" className=' text-gray-300 rounded-full '>
              <div className='bg-blue-500 rounded-full px-4 py-1' >

                <Home />
              </div>
              <h5>Home</h5>
            </Link>}
        />
      </Link>
      <Link to='/sudhadairy' className='relative  text-gray-300'>
        <BottomNavigationAction
          label="Sudha"
          icon={
            <Link to="/sudhadairy" className='text-gray-300    rounded-full '>
              <div className='bg-blue-500 rounded-full px-4 py-1' >

                <Store />
              </div>
              <h5>Sudha</h5>

            </Link>}
        />
      </Link>
      <Link to='/xerox' className='relative   text-gray-300'>
        <BottomNavigationAction
          label="Print"
          icon={
            <Link to="/xerox" className='text-gray-300   rounded-full'>
              <div className='bg-blue-500 rounded-full px-4 py-1' >

                <Print />
              </div>
              <h5>Print</h5>

            </Link>}
        />
      </Link>
      <Link to='/colddrinks' className='relative  text-gray-300'>
        <BottomNavigationAction
          label="Drinks"
          icon={
            <Link to="/colddrinks" className='text-gray-300   rounded-full '>
              <div className='bg-blue-500 rounded-full px-4 py-1' >

                <LocalDrink />
              </div>
              <h5>Drink</h5>

            </Link>}
        />
      </Link>

    </div>
  );
}
