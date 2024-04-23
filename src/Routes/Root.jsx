import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.png";
import Cart from "../assets/Cart.svg";
import "../Components/header.css";



const Root = () => {
	  return (
	<div className="app">
	  <nav className="navbar">
		<img className="Logo" src={logo} alt="logo" />
		<img className="cart" src={Cart} alt="cart" />
		<ul>
			<li>
			<NavLink to="/">Hem</NavLink>
			</li>
			<li>
			<NavLink to="/about">Om oss</NavLink>
			</li>
			<li>
			<NavLink to="/contact">Kontakt</NavLink>
			</li>
		</ul>
		
	  </nav>
	  <Outlet />
	</div>
  );
}

export { Root }