import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Signup from "./screens/Signup/Signup";
import Login from "./screens/Login/Login";
import Cart from "./screens/Cart/Cart";
import Checkout from "./screens/Checkout/Checkout";
import Home from "./screens/Home/Home";
import Item from "./screens/Item/Item";
import Profile from "./screens/Profile/Profile";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ManageUsers from "./screens/Admin/ManageUsers/ManageUsers";
import ManageItems from "./screens/Admin/ManageItems/ManageItems";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchProducts } from "./api/product";

function App() {
  const [category, setCategory] = useState("all");
  const [auth, setAuth] = useState({
    email: "",
    loggedIn: false,
    isAdmin: false,
  });

  const [products, setProducts] = useState([]);

  // when startup, fetch products from API and load user and cart from local storage if exists
  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });

    const user = JSON.parse(localStorage.getItem("auth"));
    if (user && user.email) {
      setAuth({
        email: user.email,
        loggedIn: true,
        isAdmin: user.isAdmin,
      });
    }

    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCartItems(cart);
    }
  }, []);

  // if auth changes, save it to localStorage
  useEffect(() => {
    if (auth.email) {
      localStorage.setItem("auth", JSON.stringify(auth));
    }
  }, [auth]);

  const [cartItems, setCartItems] = useState([]);

  // if cart changes, save it to localStorage
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (id, model, size, qtt) => {
    // check if item exists
    const itemIndex = products.findIndex((item) => item.id === id);

    let price, src, alt;
    if (itemIndex === -1) {
      return;
    } else {
      price = products[itemIndex].price;
      src = products[itemIndex].src;
      alt = products[itemIndex].alt;
    }

    const index = cartItems.findIndex(
      (cartItem) =>
        cartItem.id === id && cartItem.model === model && cartItem.size === size
    );
    if (index === -1) {
      setCartItems([
        ...cartItems,
        {
          model: model,
          size: size,
          id: id,
          price: price,
          quantity: qtt,
          src: src,
          alt: alt,
        },
      ]);
    } else {
      // find max quantity of item in stock
      let stockItem = products.find((item) => item.id === id);
      if (!stockItem) {
        return;
      }
      const stockModel = stockItem.models.find(
        (modelItem) => modelItem.type === model
      );
      if (!stockModel) {
        return;
      }
      const stockSize = stockModel.sizes.find(
        (sizeItem) => sizeItem.size === size
      );
      if (!stockSize) {
        return;
      }
      const maxQtt = stockSize.quantity;
      const newCartItems = [...cartItems];
      newCartItems[index].quantity = Math.min(
        newCartItems[index].quantity + qtt,
        maxQtt
      );
      setCartItems(newCartItems);
    }
  };

  const removeFromCart = (id, model, size, qtt) => {
    const index = cartItems.findIndex(
      (cartItem) =>
        cartItem.id === id && cartItem.model === model && cartItem.size === size
    );
    if (index === -1) {
      return;
    } else {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity = Math.max(
        newCartItems[index].quantity - qtt,
        0
      );
      if (newCartItems[index].quantity === 0) {
        newCartItems.splice(index, 1);
      }
      setCartItems(newCartItems);
    }
  };

  return (
    <div id="app">
      <Header
        isLoggedIn={auth.loggedIn}
        isAdmin={auth.isAdmin}
        id="header"
        setCategory={setCategory}
        itemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
      />
      <div id="app-content">
        <Routes>
          <Route path="/" exact element={<Home category={category} />} />
          <Route path="/signup" exact element={<Signup setAuth={setAuth} />} />
          <Route path="/login" exact element={<Login setAuth={setAuth} />} />
          <Route
            path="/cart"
            exact
            element={
              <Cart
                auth={auth}
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                clearCart={() => setCartItems([])}
              />
            }
          />
          <Route
            path="/checkout"
            exact
            element={
              auth.loggedIn ? (
                <Checkout
                  clearCart={() => setCartItems([])}
                  cartItems={cartItems}
                  auth={auth}
                />
              ) : (
                <Login setAuth={setAuth} />
              )
            }
          />

          <Route
            path="/item/:id"
            exact
            element={<Item auth={auth} addToCart={addToCart} />}
          />
          <Route
            path="/profile"
            exact
            element={
              auth.loggedIn ? (
                <Profile auth={auth} setAuth={setAuth} />
              ) : (
                <Login setAuth={setAuth} />
              )
            }
          />

          {auth.isAdmin && (
            <Route path="/admin/users" element={<ManageUsers auth={auth} />} />
          )}
          {auth.isAdmin && (
            <Route path="/admin/items" element={<ManageItems />} />
          )}

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
      <ToastContainer />

      <Footer />
    </div>
  );
}

export default App;
