import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSearch } from "react-icons/im";
import {GrClose} from "react-icons/gr"
import { apartments } from "../../data/data";

import './header.css';

function Header() {
  const [showSearchBar, setSearchBar] = useState(false);


  const { register, handleSubmit } = useForm({
    defaultValues: {
      investmentCategory: "",
      apartmentType: "",
      buildingType: "",
      price: "",
      location: "",
      noOfRooms: "",
      noOfSittingRooms: "",
      noOfToilets: "",
    }
  });

  const handleInput = (data) => {
    setInput(data);
  };


  return (
    <header className="header">
      {!showSearchBar ? (
        <ImSearch
          className="search-icon"
          onClick={() => setSearchBar(!showSearchBar)}
        />
      ) : (
        <GrClose
          className="search-icon"
          onClick={() => setSearchBar(!showSearchBar)}
        />
      )}

      <form
        className={showSearchBar ? " show-form" : "hide-form"}
        onSubmit={handleSubmit(console.log)}
      >
        <h2>Search Filter</h2>
        <h6>Streamline your search parameters here</h6>
        <div className="search-categories">
          <select className="cat-item" {...register("investmentCategory")}>
            <option value="">Looking for</option>
            {apartments.map((aparment, index) => (
              <option key={index} value={aparment.investmentCategory}>
                {aparment.investmentCategory}
              </option>
            ))}
          </select>

          <select {...register("apartmentType")}>
            <option value="">Aparments Type</option>
            {apartments.map((aparment, index) => (
              <option key={index} value={aparment.apartmentsType}>
                {aparment.apartmentsType}
              </option>
            ))}
          </select>

          <select {...register("buildingType")}>
            <option value="">Building Type</option>
            {apartments.map((aparment, index) => (
              <option key={index} value={aparment.buildingStyle}>
                {aparment.buildingStyle}
              </option>
            ))}
          </select>

          <select {...register("location")}>
            <option value="">Location</option>
            {apartments.map((aparment, index) => (
              <option key={index} value={aparment.location}>
                {aparment.location}
              </option>
            ))}
          </select>

          <select {...register("noOfSittingRooms")}>
            <option value="">Sitting rooms</option>
            {apartments.map((aparment, index) => (
              <option key={index} value={aparment.noOfSittingRooms}>
                {aparment.noOfSittingRooms}
              </option>
            ))}
          </select>

          <select {...register("noOfRooms")}>
            <option value="">Rooms</option>
            {apartments.map((aparment, index) => (
              <option key={index} value={aparment.noOfRooms}>
                {aparment.noOfRooms}
              </option>
            ))}
          </select>

          <select {...register("noOfToilets")}>
            <option value="">Toilets</option>
            {apartments.map((aparment, index) => (
              <option key={index} value={aparment.noOfRooms}>
                {aparment.noOfToilets}
              </option>
            ))}
          </select>

          <select {...register("price")}>
            <option value="">Price</option>
            {apartments.map((aparment, index) => (
              <option key={index} value={aparment.price}>
                {aparment.price}
              </option>
            ))}
          </select>
        </div>
        <input type="submit" />
      </form>
    </header>
  );
}

export default Header;
