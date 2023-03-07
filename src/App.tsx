import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Component/Header/Header";
import Product from "./Component/Product/Product";
import CartComponent from "./Component/Cart/Cart";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<CartComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
