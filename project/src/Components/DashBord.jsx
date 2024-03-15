import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "../Styles/Navbar.css";

const DashBord = () => {
  return (
    <>
      <header className="header">
        <nav className="nav_container">

          <div className="nav_logo"></div>
          <div >
            <NavLink to="/" className="nav__logo">
              Shoping <span>Cart</span>
            </NavLink></div>


          <div
            className={"nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/login" className="nav__link">
                  Login
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/merchantsignup" className="nav__link">
                  create user
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/aboutus"
                  className="nav__link"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/discription"
                  className="nav__link"
                >
                  Discription
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/adress"
                  className="nav__link"
                >
                  Location
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/landingpage" className="nav__link nav__cta">
                  Get Started
                </NavLink>

              </li>
              <li className="nav__item">
                <span className="nav__close" id="nav-close">
                  {/* <NavLink to="/landingpage" >
                  <IoMenu />
                </NavLink> */}
                  <NavLink to="https://www.bing.com/ck/a?!&&p=806341aa65ff58fbJmltdHM9MTcxMDQ2MDgwMCZpZ3VpZD0yYWViMmUxNy0xYzA5LTYzYTgtMGU0Ny0zZGY5MWRhNDYyYTImaW5zaWQ9NTIxNA&ptn=3&ver=2&hsh=3&fclid=2aeb2e17-1c09-63a8-0e47-3df91da462a2&psq=www.google.com&u=a1aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&ntb=1">
                    <IoClose />
                  </NavLink>

                </span>
              </li>
            </ul>

          </div>
        </nav>
        <>
        </>
      </header>

    </>
  );
};

export default DashBord

