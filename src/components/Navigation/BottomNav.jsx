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
    <BottomNavigation showLabels sx={{padding: '35px', width: '100%', position: 'fixed', bottom: '0', backgroundColor: 'slategray' }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        icon={
          <Link to="/" className='text-gray-700  hover:bg-gray-600 px-4 py-1 rounded-full '>
            <Home />
          </Link>}
      />
      <BottomNavigationAction
        label="Sudha"
        icon={
          <Link to="/sudhadairy" className='text-gray-700 hover:bg-gray-600 px-4 py-1 rounded-full '>
            <Store />
          </Link>}
      />
      <BottomNavigationAction
        label="Print"
        icon={
          <Link to="/xerox" className='text-gray-700  hover:bg-gray-600 px-4 py-1 rounded-full '>
            <Print />
          </Link>}
      />
      <BottomNavigationAction
        label="Drinks"
        icon={
          <Link to="/colddrinks" className='text-gray-700  hover:bg-gray-600 px-4 py-1 rounded-full '>
            <LocalDrink
              sx={{}}
            />
          </Link>}
      />
      <BottomNavigationAction
        label="Recharge"
        icon={
          <Link to="/recharge" className='text-gray-700  hover:bg-gray-600 px-4 py-1 rounded-full '>
            <PhoneAndroid />
          </Link>}
      />
    </BottomNavigation>
  );
}
