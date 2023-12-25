import Home from './components/Home';
import Contact from './components/Contact';
import Layout from './components/Navigation/Layout';
import Xerox from './components/Xerox';
import SudhaDairy from './components/SudhaDairy/SudhaDairy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoMatch from './components/Navigation/NoMatch';
import DiscoverUs from './components/DiscoverUs';
import Faq from './components/Others/Faq';
import GiftItems from './components/GiftItems';
import GeneralStore from './components/GeneralStore';
import ColdDrinks from './components/ColdDrinks/ColdDrinks';
import Recharge from './components/Recharge';
import ProductPage from './components/SudhaDairy/ProductPage';


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
          <Route path="/giftitems" element={<GiftItems />} />
          <Route path="/generalstore" element={<GeneralStore />} />
          <Route path="/colddrinks" element={<ColdDrinks />} />
          <Route path="/recharge" element={<Recharge />} />
          <Route path="/sudhadairy/:categoryName/:productName" element={<ProductPage/>} />
          <Route path='/faq' element={<Faq />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
