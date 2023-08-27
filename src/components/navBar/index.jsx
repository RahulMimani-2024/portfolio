import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaReact , FaBars } from "react-icons/fa";
import {HiX} from "react-icons/hi"
import "./styles.scss"
const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];
const Index = () => {
  const [isToggleIcon , setIsToggleIcon] = useState(false);
  const toggleIcon = () => {
    setIsToggleIcon(!isToggleIcon);
  }
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30}></FaReact>
          </Link>
        </div>
        <ul className={`navbar__container__menu ${isToggleIcon ? "active" : ""}`}>
          {
            data.map((item,key) => { return (
              <li key={key} className="navbar__container__menu__item">
                <Link to={item.to} className="navbar__container__menu__item__links" onClick={toggleIcon}>
                  {item.label}
                </Link>
              </li>
            )})
          }
        </ul>
        <div className="nav-icon" onClick={toggleIcon}>
          {isToggleIcon ? <HiX size={30}></HiX> : <FaBars size={30}></FaBars>}
        </div>
      </nav>
    </div>
  );
};

export default Index;
