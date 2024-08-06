import React, { useState } from "react";
import {
  FaBars,
  FaDashcube,
  FaTimes,
  FaUpload,
  FaUserPlus,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/rl_logo.png";

const UserNav = ({
  userstagename,
  handleDash,
  handleMain,
  click,
  handleClick,
  handleVote,
  scrolled,
  picture,
  handleUpload,
  support,
  video,
  ref,
}) => {
  return (
    <>
      <nav className="header header-bg " ref={ref}>
        <div className="container">
          <div className="site-logo">
            <NavLink to="#" onClick={handleMain}>
              <img src={logo} className="logo" alt="" />
            </NavLink>
            {/* <h1><NavLink className="text-black h2 mb-0" style={{ fontWeight: 700 }} to="/"><span className="text-light site-logo">Rhythm<span className="text-warning">&</span>Lyrics</span></NavLink></h1> */}
          </div>

          <ul className={click ? "navbar active space-between" : "navbar"}>
            <li className="nav-item  btn text-light">
              <span style={{ fontWeight: 700 }}>
                Welcome <span className="text-warning"> {userstagename} </span>
              </span>
              &nbsp;
            </li>

            <li className="nav-item">
              <NavLink
                className="btn nav-link "
                style={{ fontWeight: 500 }}
                to="#"
                onClick={handleDash}
              >
                Dashboard
              </NavLink>
            </li>
            {video ? (
              ""
            ) : (
              <li className="nav-item">
                <NavLink
                  className="btn nav-link"
                  style={{ fontWeight: 500 }}
                  to="#"
                  onClick={handleUpload}
                >
                  Upload
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink
                className="btn nav-link"
                style={{ fontWeight: 500 }}
                to="#"
                onClick={() => {
                  support(true);
                }}
              >
                24/7 Support
              </NavLink>
            </li>
            <li className=" nav-item text-center">
              <NavLink
                className="call_to-btn btn-warning nav-link "
                style={{ fontWeight: 500 }}
                to="#"
                onClick={handleVote}
              >
                Vote
              </NavLink>
            </li>
          </ul>

          <div className="dropdown" onClick={handleClick}>
            {click ? (
              <FaTimes size={25} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={25} style={{ color: "#fff" }} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserNav;
