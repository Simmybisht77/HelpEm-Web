import React from 'react';
import Card from './Card';

const Dashboard = ({ data, getData }) => {
	const handleRefresh = () => {
		getData();
	};
	return (
		<div className='main-title text-center wow fadeIn mt-32'>
			<h3>Status</h3>
			<div className='underline1'></div>
			<div className='flex flex-row flex-wrap my-12 mx-24 xl:justify-evenly gap-12'>
				{data.map((x) => (
					<div>
						<Card data={x} />
					</div>
				))}
			</div>
			<button
				onClick={handleRefresh}
				className='bg-cyan-700 px-10 py-4 rounded-xl mt-10 text-5xl lg:text-4xl text-white'
			>
				Refresh
			</button>
		</div>
	);
};

export default Dashboard;
