import React, { memo } from "react";
import { Link } from "react-router-dom";
import "../../screens/home/home.css";

function ApartmentCard({
    id,
  apartmentsType,
  apartmentImage,
  noOfRooms,
  NoofToilets,
  location,
  price,
  status,
}) {
  return (
    <div className="feat__apartments">
      <h2 className="feat__apart-Type">{apartmentsType}</h2>
      <img
        className="feat__apart-image"
        src={apartmentImage}
        alt="apartment image"
      />
      <div className="feat__apart-details">
        <div className="feat__apart_info-wrapper">
          <p>{noOfRooms} rooms</p>
          <p>{NoofToilets} toilets</p>
          <p>{location}</p>
        </div>
        <div className="feat__apart-impo">
          <h6>N{price}</h6>
          <h6>{status ? "For Rent" : "For Sale"}</h6>
        </div>
      </div>
      <Link to={"/apartment/" + id}>
        <button>Pay</button>
      </Link>
    </div>
  );
}

export default memo(ApartmentCard);
