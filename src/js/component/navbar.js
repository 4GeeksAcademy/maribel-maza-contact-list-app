import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
			<div className="ml-auto">
				<Link to="/addcontact">
					<button className="btn btn-success">Add Contact</button>
				</Link>
			</div>
		</nav>
	
	);
};
