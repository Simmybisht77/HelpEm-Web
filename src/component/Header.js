import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
	return (
		<div className=' bg-gradient-to-r from-cyan-800 to-cyan-950 flex flex-row items-center justify-between px-20 py-8 sticky z-50 w-[100vw]'>
			<a href='/#home' className='text-white font-extrabold text-7xl'>
				Help' Em
			</a>
			<div className='flex gap-10 text-3xl font-semibold text-white justify-end'>
				<a href='/#about'>About</a>
				<a href='/#contact'>Contact</a>
				<Link to='/informatics'>Informatics</Link>
			</div>
		</div>
	);
}

export default Header;
