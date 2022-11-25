import { memo } from "react";
import { Link } from "react-router-dom";
import Card from "../.././components/cards/ApartmentCard";
import "./home.css";

import landingMedia from "../../videos/welcome.mp4";
import apartmentImage from "../../images/houses2.jpg";
import { apartments } from "../../data/data";

import { BsFillHouseFill } from "react-icons/bs";
import { GiFamilyHouse, GiHouseKeys } from "react-icons/gi";
import { FaLandmark } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import Header from '../../components/header/Header';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="landing__container">
        <div className="landing__media">
          {/* Landing page */}
          <video autoPlay loop>
            <source src={landingMedia} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="landing__text">
          <h1 className="landing__title">
            Welcome to your
            <br />
            <small> new Home!</small>
          </h1>
          <div className="obj__loader-container">
            <div className="obj__loaders obj__loader-1">
              <GiFamilyHouse className="obj__icons" />
              <em>Buy a home</em>
            </div>
            <div className="obj__loaders obj__loader-1">
              <GiHouseKeys className="obj__icons" />
              <em>Rent a home</em>
            </div>
            <div className="obj__loaders obj__loader-1">
              <BiBuildingHouse className="obj__icons" />
              <em>Rent an office space</em>
            </div>
            <div className="obj__loaders obj__loader-1">
              <MdPayments className="obj__icons" />
              <em>save and pay</em>
            </div>
            <div className="obj__loaders obj__loader-1">
              <FaLandmark className="obj__icons" />
              <em>Invest in lands</em>
            </div>
          </div>
        </div>
      </div>

      {/* Service column page */}
      <div className="services_container">
        <h1>Whatever your dreams are?</h1>

        <div className="service__wrapper">
          <Link to="/buildings">
            <div className="service__item">
              <GiFamilyHouse className="service__icons" />
              <h3 className="service__item-title">Buy a home of your dream</h3>
            </div>
          </Link>

          <Link to="/apartments">
            <div className="service__item">
              <GiHouseKeys className="service__icons" />
              <h3 className="service__item-title">Rent an apartment</h3>
            </div>
          </Link>

          <Link to="/apartments">
            <div className="service__item">
              <BiBuildingHouse className="service__icons" />
              <h3 className="service__item-title">Get a office space</h3>
            </div>
          </Link>

          <Link to="/lands">
            <div className="service__item">
              <MdPayments className="service__icons" />
              <h3 className="service__item-title">Invest in your future</h3>
            </div>
          </Link>

          <Link to="/buildings">
            <div className="service__item">
              <FaLandmark className="service__icons" />
              <h3 className="service__item-title">Pay from your phone</h3>
            </div>
          </Link>
        </div>
        <h5>You can achieve more with MyEstate App at your fingertips!</h5>
      </div>

      {/* Featured Apartments */}
      <div className="feat__apart-container">
        <div className="feat__apart-text">
          <h2 className="feat__apart-title">Featured Apartments</h2>
          <Link to="/apartments">
            <h6 className="feat__apart-title h6">More</h6>
          </Link>
        </div>
        <div className="flex apartment-wrapper">
          {apartments.map(
            ({
              id,
              apartmentsType,
              image,
              noOfRooms,
              noOfToilets,
              location,
              price,
              status,
            }) => (
              <Card
                key={id}
                id={id}
                apartmentsType={apartmentsType}
                apartmentImage={image}
                noOfRooms={noOfRooms}
                noOfToilets={noOfToilets}
                location={location}
                status={status}
                price={price}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
