import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import AddApartmentForm from "../../components/forms/AddApartmentForm";

import "./dashboard.css";
import "../../components/navBar/navBar.css";

const Dashboard = () => {
  return (
    <div className="parent__container">
      <div className="dashboard__container">
        <div className="dashboard">
          <NavLink
            to="../screens/components/forms/addApartments"
            className={({ isActive }) => (isActive ? "active-nav" : "")}
          >
            Add Apartment
          </NavLink>
        </div>
        <div className="dashboard__text-container">
          <h2 className="dashboard-title">Welcome to your dashboard</h2>
          <h4 className="dashboard-message">
            You can add, edit, delete and see all the posts you have made.
          </h4>
          <div className="dashboard__display">
            <div className="wallet__card-container">
              <div className="wallet__card-details">
                <h2 className="card__details-amount">N56,300.00</h2>
                <h3 className="card__details-id">8123-4378-7634-8734</h3>
                <h4 className="card__details-name">Abdulrasheed Ilori</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Dashboard);
