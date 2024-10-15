import Home from "./components/main/Home";
import Contact from "./components/Others/Contact";
import Layout from "./components/Navigation/Layout";
// import Xerox from './components/Routes/Xerox';
// import Dairy from './components/Dairy/Dairy';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoMatch from "./components/Others/NoMatch";
import DiscoverUs from "./components/Others/DiscoverUs";
import Faq from "./components/Others/Faq";
import GeneralStore from "./components/GeneralStore";
// import Drink from "./components/Routes/Drink";
// import BottomNav from "./components/Navigation/BottomNav";
import Gadgets from "./components/Routes/Gadgets";
import SmartPhone from "./components/Routes/SmartPhone";

import Cart from "../src/Cart/Cart";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/login/SignupPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the login page without Layout  */}
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Routes that use the Layout component */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gadgets" element={<Gadgets />} />
          <Route path="/smartphone" element={<SmartPhone />} />
          <Route path="/discoverus" element={<DiscoverUs />} />
          <Route path="/generalstore" element={<GeneralStore />} />
          {/* <Route path="/drink" element={<Drink />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      {/* <BottomNav /> */}
    </BrowserRouter>
  );
};

export default App;
