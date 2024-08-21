import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";

import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import Profile from "./components/users/Profile";
import UpdateProfile from "./components/users/UpdateProfile";
import ForgotPassword from "./components/users/ForgotPassword";
import NewPassword from "./components/users/NewPassword";
import Cart from "./components/cart/Cart";

import store from './store';
import { loadUser } from "./actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "./actions/cartAction";

export default function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  if(user) dispatch(fetchCartItems());

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eats/stores/:restaurantId/menus" element={<Menu />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/signup" element={<Register />} />
            <Route path="/users/me" element={<Profile />} />
            <Route path="/users/me/update" element={<UpdateProfile />} />
            <Route path="/users/forgotPassword" element={<ForgotPassword />} />
            <Route path="/users/resetPassword/:token" element={<NewPassword />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
