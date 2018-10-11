
import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import "./Nav.css";
import logo from "./images/logo.png";
 import { Navbar, Row } from 'react-bootstrap';

 const Nav = () => (
  <div className="container-fluid">
  <Row>


 <div className="nav-item">
 <Link
        to="/groceryList"
        className={
          window.location.pathname === "/groceryList" 
        }
      >
      <img src={logo} width="140" height="70"/>
    </Link>
    </div>
    </Row>
    <div className="container-fluid">
  <ul className="nav nav-tabs">
   
    <li className="nav-item">
      <Link
        to="/groceryList"
        className={
          window.location.pathname === "/groceryList" ? "nav-link active" : "nav-link"
        }
      >
        Grocery List
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/myFridge"
        className={
          window.location.pathname === "/myFridge" ? "nav-link active" : "nav-link"
        }
      >
        My Fridge
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/recipe"
        className={
          window.location.pathname === "/recipe" ? "nav-link active" : "nav-link"
        }
      >
        Recipe
      </Link>
    </li>
  </ul>
 </div>
  </div>
);

export default Nav;
