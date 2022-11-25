import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Signup from "./screens/Signup/Signup";
import Login from "./screens/Login/Login";
import Cart from "./screens/Cart/Cart";
import Checkout from "./screens/Checkout/Checkout";
import Home from "./screens/Home/Home";
import Item from "./screens/Item/Item";
import Profile from "./screens/Profile/Profile";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div id="app">
        <div id="app-content">
          <Header id="header" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/item/:id" element={<Item />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
        <Footer id="footer" />
      </div>
  );
}

export default App;
