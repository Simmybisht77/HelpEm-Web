import React from 'react';

const embed = ['WkjwpL8LOgI', 'USLHmwvpjX8'];

const Videos = () => {
	return (
		<div className='main-title fadeIn my-32 px-20'>
			<h3 className='text-center'>Videos</h3>
			<div className='underline1' />
			<div className='flex flex-row flex-wrap justify-center my-20 gap-20'>
				{embed.map((em) => (
					<iframe
						className='w-[100vw] lg:w-[35vw] aspect-video'
						src={`https://www.youtube.com/embed/${em}`}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						title='Embedded youtube'
					/>
				))}
			</div>
		</div>
	);
};

export default Videos;
