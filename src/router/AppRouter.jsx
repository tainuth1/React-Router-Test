import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import AddProduct from "../components/products/AddProduct";
import ViewProduct from "../components/products/ViewProduct";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users/>} />
        <Route path="/profile/:name" element={<Profile />}/>
        <Route path="*" element={<NotFound />} />

        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-product" element={<ViewProduct />} />
      </Routes>
    </>
  );
};

export default AppRouter;
