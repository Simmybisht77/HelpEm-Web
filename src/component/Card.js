import React from 'react';

const Card = ({ data }) => {
	return (
		<div className='rounder-sm shadow-xl w-[29rem] md:w-[27rem]'>
			<div className='text-5xl  my-5 px-16'>{data[1].name}</div>
			<div className='underline1' />
			<div className='underline2' />
			<div className='text-7xl font-bold py-24'>{data[1].count}</div>
		</div>
	);
};

export default Card;
