import React, { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//screens
import Home from "./screens/home/Home";
import Apartments from "./screens/apartments/Apartments";
import Buildings from "./screens/buildings/Buildings";
import Dashboard from "./screens/dashboard/Dashboard";
import Details from "./screens/details/Detail";
import Acknowledgement from "./screens/acknowledgement/Acknowledgement";
import Lands from "./screens/lands/Lands";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import Favourites from "./screens/favourite/Favourites";
import Payment from "./screens/payment/Payment";
import NotFound from "./screens/notFound/NotFound";

//Adding dashboard navigation
import AddApartmentForm from "./components/forms/AddApartmentForm";
import AddLandForm from "./components/forms/AddLandForm";
import AddBuildingForm from "./components/forms/AddBuildingForm";

//comonents
// import Header from './components/header/Header';
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

//styles
import "./styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Header /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="apartments" element={<Apartments/>} />
        <Route path="addApartment" element={<AddApartmentForm />} />
        <Route path="addBuilding" element={<AddBuildingForm />} />
        <Route path="addLand" element={<AddLandForm />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="acknowledgement" element={<Acknowledgement />} />
        <Route path="register" element={<Register />} />
        <Route path="payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
