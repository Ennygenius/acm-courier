import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import NotFOund from "./Pages/Notfound/NotFOund";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Admin from "./Pages/Admin/Dashboard/Admin";
import Signup from "./Pages/Admin/Auth/Signup";
import Signin from "./Pages/Admin/Auth/Signin";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import EditTrack from "./Pages/Admin/Dashboard/ETrack/EditTrack";
import DTrack from "./Pages/Admin/Dashboard/DTrack/DTrack";
import AddCourier from "./Pages/Admin/AddCourier/AddCourier";
import {
  UseProtect,
  PrivateRoute,
  AdminPrivateRoute,
} from "./Hooks/protectRoute/Protect";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>

      <Route path="/admin/signin" element={<Signin />}></Route>

      <Route path="/admin/signup" element={<Signup />}></Route>
      <Route path="/admin/signin" element={<Signin />}></Route>

      <Route element={<AdminPrivateRoute />}>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/ETrack/:id" element={<EditTrack />}></Route>
        <Route path="/DTrack/:id" element={<DTrack />}></Route>
        <Route path="/addCourier" element={<AddCourier />}></Route>
      </Route>

      <Route path="*" element={<NotFOund />}></Route>
    </Routes>
  );
}

export default App;
