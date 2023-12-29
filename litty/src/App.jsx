import { useState } from "react";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Cart2 from "./components/Cart2";
import Navbar2 from "./components/Navbar2";
import ItemPage from "./components/ItemPage";
import ShopContextProvider from "./components/context/ShopContext";

function App() {
  const [nav, setnav] = useState(false);
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar2 />
        <Routes>
          <Route element={<Home nav={nav} setnav={setnav} />} path="/"></Route>
          <Route element={<Contact />} path="contact"></Route>
          <Route element={<Cart2 />} path="cart2"></Route>
          <Route element={<ItemPage />} path="ItemPage"></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
