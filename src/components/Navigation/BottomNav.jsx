import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Person2 } from '@mui/icons-material';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <BottomNavigation sx={{ width: '100%', position: 'fixed', bottom: '0' }} value={value} onChange={handleChange}>

      <BottomNavigationAction
        label="You"
        icon={<Person2 />}
      />
    </BottomNavigation>
  );
}