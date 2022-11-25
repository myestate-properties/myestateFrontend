import { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { links } from "../../data/data";

import "./navBar.css";

const NavBar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle((prev)=>!prev);
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to={"/"}>
          <BsFillHouseFill className="icon home_icon" />
          <h5>MYESTATE</h5>
        </Link>
        <ul
          //   className="nav__links"
          className={isToggle ? "nav__links showMenu" : "nav__links hideMenu"}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li onClick={handleToggle} key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
          
        </ul>
        <button onClick={handleToggle} className="nav__toggle-btn">
          {!isToggle ? (
            <FiMenu className="icon menu_icon" />
          ) : (
            <GrClose className="icon menu-icon" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default memo(NavBar);
