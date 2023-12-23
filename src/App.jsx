import Home from './components/Home';
import Contact from './components/Contact';
import Layout from './components/Navigation/Layout';
import Xerox from './components/Xerox';
import SudhaDairy from './components/SudhaDairy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoMatch from './components/Navigation/NoMatch';
import DiscoverUs from './components/DiscoverUs';
import Faq from './components/Faq';
import GiftItems from './components/GiftItems';
import GeneralStore from './components/GeneralStore';
import ColdDrinks from './components/ColdDrinks';
import StationaryItems from './components/StationaryItems';
import Recharge from './components/Recharge';


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
          <Route path="/stationaryitems" element={<StationaryItems />} />
          <Route path="/recharge" element={<Recharge />} />
          <Route path='/faq' element={<Faq />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
