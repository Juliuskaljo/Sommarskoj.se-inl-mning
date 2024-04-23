import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.png";
import cartLogo from "../assets/cartLogo.svg";
import Cart from "../Components/Cart";
import "../Components/header.css";
import "../Components/footer.css";



const Root = () => {
	  return (
	<div className="app">
	  <nav className="navbar">
		<img className="Logo" src={logo} alt="logo" />

		<NavLink to="/cart">
		<img className="cart" src={cartLogo} alt="cart" />
		</NavLink>
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

	  <footer>
		<div className="footer-container">
		<h5>Sommarskoj@info.se</h5>
		<h5>08-123 456 78</h5>
		<NavLink to="/admin">Admin</NavLink>
		</div>
	  </footer>
	</div>
  );
}

export { Root }