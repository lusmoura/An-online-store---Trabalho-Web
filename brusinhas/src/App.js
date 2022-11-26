import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Signup from "./screens/Signup/Signup";
import Login from "./screens/Login/Login";
import Cart from "./screens/Cart/Cart";
import Checkout from "./screens/Checkout/Checkout";
import Home from "./screens/Home/Home";
import Item from "./screens/Item/Item";
import Profile from "./screens/Profile/Profile";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ManageUsers from "./screens/Admin/ManageUsers/ManageUsers";
import ManageItems from "./screens/Admin/ManageItems/ManageItems";
function App() {
  const [category, setCategory] = useState("all");

  return (
    <div id="app">
      <div id="app-content">
        <Header isAdmin id="header" setCategory={setCategory} />
        <Routes>
          <Route path="/" exact element={<Home category={category} />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/checkout" exact element={<Checkout />} />
          <Route path="/item/:id" exact element={<Item />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/items" element={<ManageItems />} />

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
      <Footer id="footer" />
    </div>
  );
}

export default App;
