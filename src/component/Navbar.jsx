import React from 'react';

const Navbar = () => {
	return <nav className='nav justify-content-center'>
		<ul>
			<a href="/"><li>Home</li></a>
			<a href="some"><li>Blog</li></a>
			<a href="some"><li>News</li></a>
			<a href="/about"><li>About</li></a>
			<a href="/contact"><li>Contact</li></a>
		</ul>
	</nav>
};

export default Navbar;