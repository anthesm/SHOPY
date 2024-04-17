import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { items } from "./component/ProdData/Data";
import Navbar from "./component/Navbar";
import Product from "./component/Products/Product";
import LoginForm from "./component/author/Login";
import SignupForm from "./component/author/Signup";
import Cart from "./component/Products/Cart";
import ProductDetails from "./component/Products/ProductDetails";
import Hero from "./component/Hero";
function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/products"
            element={<Product cart={cart} setCart={setCart} items={data} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
          <Route path="/logout" element={<h1>This is logout</h1>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
