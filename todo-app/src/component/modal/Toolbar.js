import React from 'react';
import {  Link } from 'react-router-dom'

const Toolbar = props => (
	
	<nav className="navbar navbar-expand-lg navbar-light bg-dark">
		<Link className="navbar-brand" to="/"  style={{color: "white"}}>Home</Link>		
		<div className="collapse navbar-collapse" id="toolbar" >
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link className="nav-link" to="/add"  style={{color: "white"}}>Add</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/active"  style={{color: "white"}}>Active</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/done" style={{color: "white"}} >Done</Link>
				</li>
			</ul>
		</div>
	</nav>
    
);

export default Toolbar;