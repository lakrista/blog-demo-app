import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return <nav className='nav justify-content-center'>
		<ul>
			<NavLink to="/"><li>Home</li></NavLink>
			<NavLink to="/blog"><li>Blog</li></NavLink>
			<NavLink to="/news"><li>News</li></NavLink>
			<NavLink to="/about"><li>About</li></NavLink>
			<NavLink to="/contact"><li>Contact</li></NavLink>
		</ul>
	</nav>
};

export default Navbar;