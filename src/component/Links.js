import React from 'react';

const Links = () => {
	return (
		<div className='main-title fadeIn my-32 px-20'>
			<h3 className='text-center'>Information and Links</h3>
			<div className='underline1'></div>

			<div className='m-10 border p-10 rounded-md'>
				<div className='text-4xl md:text-5xl text-left font-bold mb-3 text-cyan-900'>
					Emergency Management
				</div>
				<p className='flex flex-row text-left md:text-3xl'>
					Prevention, mitigation, preparedness, response and recovery are the
					five steps of Emergency Management.
				</p>
				<br />
				<div className='text-left md:text-3xl'>read more here...</div>
				<a
					className='flex flex-row text-left text-cyan-500'
					href='https://www.stlouis-mo.gov/government/departments/public-safety/emergency-management/about/Steps-of-Emergency-Management.cfm#:~:text=Prevention%2C%20mitigation%2C%20preparedness%2C%20response,five%20steps%20of%20Emergency%20Management'
					target='_blank'
					rel='noreferrer'
				>
					stlouis-mo
				</a>
				<a
					className='flex flex-row text-left text-cyan-500'
					href='https://publichealth.tulane.edu/blog/what-is-disaster-management/#:~:text=Disaster%20management%20is%20a%20process,preparedness%2C%20response%2C%20and%20recovery'
					target='_blank'
					rel='noreferrer'
				>
					publichealth
				</a>
			</div>

			<div className='m-10  border p-10 rounded-md'>
				<div className='text-4xl md:text-5xl text-left font-bold mb-3 text-cyan-900'>
					Cloud Burst
				</div>
				<p className='flex flex-row text-left md:text-3xl'>
					a cloudburst typically refers to a sudden and intense surge of data or
					traffic in a cloud computing environment. It is characterized by a
					rapid increase in demand for resources, such as processing power,
					storage, or network bandwidth, that exceeds the capacity of the cloud
					infrastructure.
				</p>
				<p className='flex flex-row text-left md:text-3xl'>
					When a cloudburst occurs, the cloud infrastructure may struggle to
					handle the sudden influx of requests, leading to performance
					degradation, slow response times, or even service disruptions. This
					can occur due to various factors, such as a sudden spike in user
					activity, a distributed denial-of-service (DDoS) attack, or a failure
					in the cloud infrastructure itself.
				</p>
				<p className='flex flex-row text-left md:text-3xl'>
					To address cloudburst scenarios, cloud providers typically employ
					various strategies such as load balancing, auto-scaling, and resource
					allocation algorithms. These mechanisms help to dynamically allocate
					additional computing resources to handle the increased demand and
					ensure the smooth operation of cloud-based services.
				</p>
				<div className='flex flex-row justify-center my-16'>
					<img
						className=' aspect-square lg:w-1/2'
						src='https://www.researchgate.net/profile/Vishwambhar-Sati/publication/322714818/figure/fig4/AS:631611683004424@1527599368563/Mechanism-implications-prevention-and-mitigation-of-cloudburst-triggered-natural.png'
						alt='cloud burst img'
					/>
				</div>
			</div>

			<div className='m-10  border p-10 rounded-md'>
				<div className='text-4xl md:text-5xl text-left font-bold mb-3 text-cyan-900'>
					Earthquakes
				</div>
				<p className='flex flex-row text-left md:text-3xl'>
					An earthquake is a term used to describe both a sudden slip on a fault
					and the resulting ground shaking and radiated seismic energy caused by
					the slip, or by volcanic or magmatic activity, or other sudden stress
					changes in the earth. (U.S. Geological Survey).
					<br />
					<br />
					Worldwide, more than one million earthquakes occur each year, or an
					average of two a minute. A major earthquake in an urban area is one of
					the worst natural disasters that can occur. During the last four
					decades (1970-2017), earthquakes have been responsible for over a
					million deaths around the world in Armenia, China, Ecuador, Guatemala,
					Haiti, Iran, India, Indonesia, Japan, Mexico, Pakistan, Peru, and
					Turkey
				</p>
				<br />
				<div className='text-left md:text-3xl'>read more here...</div>
				<a
					rel='noreferrer'
					className='flex flex-row text-left text-cyan-500'
					href='https://www.paho.org/en/topics/earthquakes'
					target='_blank'
				>
					paho.org
				</a>
			</div>

			<div className='m-10  border p-10 rounded-md'>
				<div className='text-4xl md:text-5xl text-left font-bold mb-3 text-cyan-900'>
					Floods
				</div>
				<p className='flex flex-row text-left md:text-3xl'>
					Flooding is a temporary overflow of water onto land that is normally
					dry. Floods are the most common natural disaster in the United States.
					Failing to evacuate flooded areas or entering flood waters can lead to
					injury or death.
				</p>
				<p className='flex flex-row text-left md:text-3xl font-semibold'>
					Floods may:
				</p>
				<p>
					- Result from rain, snow, coastal storms, storm surges and overflows
					of dams and other water systems.
				</p>
				<p>
					- Develop slowly or quickly. Flash floods can come with no warning.
				</p>
				<p>
					- Cause outages, disrupt transportation, damage buildings and create
					landslides.
				</p>
				<br />
				<div className='text-left md:text-3xl'>read more here...</div>
				<a
					rel='noreferrer'
					className='flex flex-row text-left text-cyan-500'
					href='https://www.ready.gov/floods'
					target='_blank'
				>
					ready.gov/floods
				</a>
			</div>

			<div className='m-10  border p-10 rounded-md'>
				<div className='text-4xl md:text-5xl text-left font-bold mb-3 text-cyan-900'>
					Lanslides
				</div>
				<p className='flex flex-row text-left md:text-3xl'>
					Landslide and debris flow warning signs, what to do before, during,
					and after.
				</p>
				<p className='flex flex-row text-left md:text-3xl font-semibold'>
					Areas that are generally prone to landslide hazards
				</p>
				<p>- On existing old landslides.</p>
				<p>- On or at the base of slopes.</p>
				<p>- In or at the base of minor drainage hollows.</p>
				<p>- At the base or top of an old fill slope.</p>
				<br />
				<div className='text-left md:text-3xl'>read more here...</div>
				<a
					rel='noreferrer'
					className='flex flex-row text-left text-cyan-500'
					href='https://www.usgs.gov/programs/landslide-hazards/landslide-preparedness#:~:text=What%20To%20Do%20Before%20a,and%20university%20departments%20of%20geology.'
					target='_blank'
				>
					usgs.gov
				</a>
			</div>
		</div>
	);
};

export default Links;
