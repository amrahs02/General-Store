import Home from './components/main/Home';
import Contact from './components/Navigation/Contact';
import Layout from './components/Navigation/Layout';
import Xerox from './components/Navigation/Xerox';
import Dairy from './components/Dairy/Dairy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoMatch from './components/Navigation/NoMatch';
import DiscoverUs from './components/main/DiscoverUs';
import Faq from './components/Others/Faq';
import GeneralStore from './components/GeneralStore';
import ColdDrinks from './components/ColdDrinks/ColdDrinks';
import BottomNav from './components/Navigation/BottomNav';
import Cart from './components/Cart/Cart';
import LoginPage from './components/Login/LoginPage';
import SignupPage from './components/Login/SignupPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the login page without Layout  */}
        <Route path='/register' element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Routes that use the Layout component */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="/xerox" element={<Xerox />} />
          <Route path="/discoverus" element={<DiscoverUs />} />
          <Route path="/generalstore" element={<GeneralStore />} />
          <Route path="/colddrinks" element={<ColdDrinks />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      <BottomNav />
    </BrowserRouter>
  );
};

export default App;
