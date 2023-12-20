import Home from './components/Home';
import Contact from './components/Others/Contact';
import Layout from './components/Navigation/Layout';
import Xerox from './components/Xerox';
import SudhaDairy from './components/SudhaDairy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import DiscoverUs from './components/DiscoverUs';
// import { useState } from 'react';

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/sudhadairy" element={<SudhaDairy />} />
          <Route path="/xerox" element={<Xerox />} />
          <Route path="/discoverus" element={<DiscoverUs />} />
          {/* <Route path="/sudhadairy/:slug" element={<ProductDetails />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
