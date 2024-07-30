import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
			{/* <Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link> */}
			<div className="ml-auto">
				<Link to="/addContact">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
