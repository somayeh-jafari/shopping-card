import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

//component
import Navbar from "./components/shared/Navbar";
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import ShopCart from "./components/ShopCart";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/" element={<Navigate to="/products" />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
