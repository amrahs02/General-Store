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
    <BottomNavigation className='sm:!hidden !bg-slate-600 pt-6 rounded-t-xl w-full fixed bottom-0' showLabels value={value} onChange={handleChange}>
      <Link to='/' className='relative bottom-10 text-gray-300'>
        <BottomNavigationAction
          label="Home"
          icon={
            <Link to="/" className=' text-gray-300 hover:bg-gray-800 active:bg-slate-800 px-5 my-1 rounded-full '>
              <Home />
              <h5>Home</h5>
            </Link>}
        />
      </Link>
      <Link to='/sudhadairy' className='relative bottom-10 text-gray-300'>
        <BottomNavigationAction
          label="Sudha"
          icon={
            <Link to="/sudhadairy" className='text-gray-300 hover:bg-gray-800 active:bg-slate-800 px-5 my-1   rounded-full '>
              <Store />
              <h5>Sudha</h5>

            </Link>}
        />
      </Link>
      <Link to='/xerox' className='relative bottom-10  text-gray-300'>
        <BottomNavigationAction
          label="Print"
          icon={
            <Link to="/xerox" className='text-gray-300  hover:bg-gray-800 active:bg-slate-800 px-5 my-1 rounded-full'>
              <Print />
              <h5>Print</h5>

            </Link>}
        />
      </Link>
      <Link to='/colddrinks' className='relative bottom-10  text-gray-300'>
        <BottomNavigationAction
          label="Drinks"
          icon={
            <Link to="/colddrinks" className='text-gray-300  hover:bg-gray-800 active:bg-slate-800 px-5 my-1 rounded-full '>
              <LocalDrink
              />
              <h5>Drink</h5>

            </Link>}
        />
      </Link>

    </BottomNavigation>
  );
}
