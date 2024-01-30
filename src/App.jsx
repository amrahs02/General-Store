import Home from './components/main/Home';
import Contact from './components/Navigation/Contact';
import Layout from './components/Navigation/Layout';
import Xerox from './components/Navigation/Xerox';
import SudhaDairy from './components/SudhaDairy/SudhaDairy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoMatch from './components/Navigation/NoMatch';
import DiscoverUs from './components/main/DiscoverUs';
import Faq from './components/Others/Faq';
import GeneralStore from './components/GeneralStore';
import ColdDrinks from './components/ColdDrinks/ColdDrinks';
import Recharge from './components//Navigation/Recharge';
import BottomNav from './components/Navigation/BottomNav';


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
          <Route path="/generalstore" element={<GeneralStore />} />
          <Route path="/colddrinks" element={<ColdDrinks />} />
          <Route path="/recharge" element={<Recharge />} />
          {/* <Route path="/sudhadairy/:categoryName/:productName" element={<ProductPage/>} /> */}
          <Route path='/faq' element={<Faq />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
};

export default App;
