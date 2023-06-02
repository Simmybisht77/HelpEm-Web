import React from 'react';
import Dashboard from '../component/Dashboard';
import axios from 'axios';
import { BASE_URL } from '../shared';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import Links from '../component/Links';

const Home = () => {
	const [data, setData] = useState();
	const getData = () => {
		axios.get(`${BASE_URL}/count`).then((res) => {
			const dataObject = res.data;
			const newData = Object.entries(dataObject).map((x) => x);
			setData(newData);
		});
	};
	useLayoutEffect(() => {
		getData();
	}, []);

	return (
		<React.StrictMode>
			<div className='main-page-content'>
				<div id='home'>
					<div id='particles-js'></div>
					<div className='home-content-main'>
						<div className='table-cell'>
							<div className='container'>
								<div className='row home-row'>
									<div className='col-md-12 col-sm-12'>
										<div className='home-text wow fadeIn text-center'>
											<h1 className='cd-headline clip is-full-width'>
												<span
													className='cd-words-wrapper'
													style={{ width: '266px', overflow: 'hidden' }}
												>
													<b className='is-hidden'>Help'Em</b>
													<b className='is-visible'>Let You Be The Hero</b>
													<b className='is-hidden'>PREPARE.PLAN.</b>
													<b className='is-visible'>Let YOU be a hero.</b>
												</span>
											</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='parallax' data-velocity='-.1'></div>
					<div className='parallax' data-velocity='-.5' data-fit='525'></div>
				</div>

				{/* <!-- ================================ ABOUT =============================== --> */}

				<div id='about'>
					<div className='about-content'>
						<div className='love-grid text-center'>
							<div className='container'>
								<div className='row'>
									<div className='col-md-12'>
										<div className='main-title text-center wow fadeIn'>
											<h3>Overview</h3>
											<div className='underline1'></div>
											<div className='underline2'></div>
											<p>
												Disaster situations are threatening, highly dynamic, and
												with uncertain developments. It is difficult to predict
												human behaviour when hit by a Disaster as this depends
												on unknown and irrational factors. National disaster
												task forces such as NDRF have been experiencing such
												situations while evacuating the areas under the
												influence of disasters like earthquakes, floods,
												cyclones, and other calamities. It is vital to evaluate
												the disaster-struck areas, understand the requirements
												at the ground level and use the resources present at the
												moment optimally. There is a requirement to create a
												system to manage and minimize the aftermaths of a
												disaster. So, we present a solution to this by
												developing a platform where various people grant their
												homes, shops, etc., for shelter purposes. The platform
												can be used by the family of the victim to find his
												location or whether he is safe or not. The platform will
												help in improving the facilities provided to the victims
												by sheltering them and managing the crowd effectively.
												In times of disaster, it is a difficult task to manage
												the humongous crowd filled with fear. Providing them
												with shelter and food gets tough. This is where our
												platform comes in handy. It gives a chance to a commoner
												to step forward and voluntarily help those helpless
												people by providing shelter. Other than this, our
												platform will help the family members in locating their
												lost ones if they are in any of the shelters under us.
											</p>
										</div>
									</div>
								</div>
								{data ? <Dashboard data={data} getData={getData} /> : null}
								<div className='row love-row wow fadeIn'>
									<div className='col-md-3 col-sm-6'>
										<div className='love-details' data-wow-delay='.1s'>
											<h3>Frightened Crowd</h3>
											<div className='underline1'></div>
											<img src='assets\img\crowd.jpeg' alt="Help'Em" />

											<p>
												When a huge disaster strikes,people are usually in a
												panic, and controlling crowd becomes a difficult task.
											</p>
										</div>
									</div>
									<div className='col-md-3 col-sm-6'>
										<div className='love-details' data-wow-delay='.3s'>
											<h3>Availability of Shelter </h3>
											<div className='underline1'></div>
											<img src='assets\img\download.png' alt="Help'Em" />

											<p>
												During disasters, finding a shelter is very difficult
												task.
											</p>
										</div>
									</div>
									<div className='col-md-3 col-sm-6'>
										<div className='love-details' data-wow-delay='.2s'>
											<h3>Finding your loved ones</h3>
											<div className='underline1'></div>
											<img src='assets\img\lovedone.jpeg' alt="Help'Em" />

											<p>
												In such an adverse condition finding your relatives and
												family members could be really tough.
											</p>
										</div>
									</div>
									<div className='col-md-3 col-sm-6'>
										<div className='love-details' data-wow-delay='.2s'>
											<div></div>
											<h3>Relief</h3>
											<div className='underline1'></div>
											<img src='assets\img\help.png' alt="Help'Em" />
											<p>Help is provided.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div></div>
						<div className='about-back'></div>
						<div className='love-grid text-center'>
							<div className='container'>
								<div className='row'>
									<div className='col-md-12'>
										<div className='main-title text-center wow fadeIn'>
											<h3>Objectives</h3>
											<div className='underline1'></div>
											<div className='underline2'></div>
											<p className='wow fadeIn'>
												<li>
													Making people aware of fore coming disasters to reduce
													the impact using push notifications on the user’s app.
												</li>
												<li>
													Provide guidance and personal safety measures through
													the app to make disaster ready.
												</li>
												<li>
													Evacuation of people to safety shelters by tracking
													disaster-hit areas.
												</li>
												<li>
													Provide a platform for users to volunteer in disaster
													relief activities.
												</li>
												<li>
													Provide a mechanism for locating a lost person using a
													shelter database.
												</li>
												<li>
													Provide a control dashboard (web portal) to monitor
													disaster situations and ensure sufficient actions.
												</li>{' '}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- ============================================== SERVICE ===================================================== --> */}

					<div id='service'>
						<div className='service-content'>
							<div className='service-grid text-center'>
								<div className='container'>
									<div className='main-title text-center wow fadeIn'>
										<h3>Let's Educate</h3>
										<div className='underline1'></div>

										<h4>
											To educate and make people aware, makes a DIFFERENCE!
										</h4>
										<h4>
											{' '}
											Phases of Post-disaster are the main key of our project.{' '}
										</h4>
									</div>

									<div className='row love-row wow fadeIn'>
										<div className='col-md-4 col-sm-6'>
											<div className='service-details' data-wow-delay='.1s'>
												<div className='service-head'>
													<img
														src='assets\img\response.jpeg'
														alt='design-development'
													/>
												</div>
												<div className='service-bottom'>
													<h3>Response</h3>
													<div className='underline1'></div>
													<div className='underline2'></div>
													<p>
														Response measures are usually those which are taken
														immediately prior to and following disaster impact.
													</p>
												</div>
											</div>
										</div>
										<div className='col-md-4 col-sm-6'>
											<div className='service-details' data-wow-delay='.1s'>
												<div className='service-head'>
													<img src='assets\img\recovery.png' alt='e-commarce' />
												</div>
												<div className='service-bottom'>
													<h3>Recovery</h3>
													<div className='underline1'></div>
													<div className='underline2'></div>
													<p>
														It is the process by which communities are assisted
														in returning to their proper level of functioning
														after a disaster.
													</p>
												</div>
											</div>
										</div>
										<div className='col-md-4 col-sm-6'>
											<div className='service-details' data-wow-delay='.1s'>
												<div className='service-head'>
													<img
														src='assets\img\relief&rescue.png'
														alt='analytics'
													/>
												</div>
												<div className='service-bottom'>
													<h3>Relief + Rescue </h3>
													<div className='underline1'></div>
													<div className='underline2'></div>
													<p>
														Phase begins when assistance from outside area
														starts reaching the disaster site.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='text-grid-main'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12 col-sm-12'>
								<div className='main-title text-center wow fadeIn'>
									<h3>Hazards</h3>
									<div className='underline1'></div>
									<div className='underline2'></div>
									<p></p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='work-counter text-center'>
					<div className='counter'>
						<div className='container'>
							<div className='row wow fadeIn'>
								<div className='col-md-3 col-sm-6'>
									<div className='work-statistics'>
										<p>Natural Hazards</p>
										<div class='fied-content'>
											<p>
												<a href='/Natural-Hazards/Cyclone' target='_blank'>
													Cyclone
												</a>
											</p>
											<p>
												<a href='/Natural-Hazards/Tsunami' target='_blank'>
													Tsunami
												</a>
											</p>
											<p>
												<a href='/Natural-Hazards/Floods' target='_blank'>
													Floods
												</a>
											</p>

											<p>
												<a href='/Natural-Hazards/Lanslides' target='_blank'>
													Lanslides
												</a>
											</p>
											<p>
												<a href='/Natural-Hazards/Earthquakes' target='_blank'>
													Earthquakes
												</a>
											</p>
										</div>
									</div>
								</div>
								<div className='col-md-3 col-sm-6'>
									<div className='work-statistics'>
										<p>Man-Made Hazards</p>
										<div class='fied-content'>
											<p>
												<a href='/Man-made-Hazards/Nuclear' target='_blank'>
													Nuclear
												</a>
											</p>
											<p>
												<a href='/Man-made-Hazards/Chemical' target='_blank'>
													Chemical
												</a>
											</p>
											<p>
												{' '}
												<a href='/Man-made-Hazards/Biological' target='_blank'>
													Biological
												</a>
											</p>
										</div>
									</div>
								</div>
								<div className='col-md-3 col-sm-6'>
									<div className='work-statistics'>
										<p>SDMA</p>
										<div class='fied-content'>
											<p>
												<a href='http://www.apsdma.ap.gov.in/' target='_blank'>
													Andhra Pradesh
												</a>
											</p>
											<p>
												<a
													href='https://itanagar.nic.in/disaster-management/'
													target='_blank'
												>
													Arunachal Pradesh
												</a>
											</p>
											<p>
												<a href='http://bsdma.org/Home.aspx' target='_blank'>
													Assam
												</a>
											</p>
											<p>
												<a
													href='https://revenue.cg.nic.in/CGSDMA/index.html'
													target='_blank'
												>
													Bihar
												</a>
											</p>
											<p>
												<a href='/Governance/SDMA' target='_blank'>
													More..
												</a>
											</p>
										</div>
									</div>
								</div>
								<div className='col-md-3 col-sm-6'>
									<div className='work-statistics'>
										<p>Global Initiatives</p>
										<p>
											<a href='/Global/International-Exercises' target='_blank'>
												International Exercises
											</a>
										</p>
										<p>
											<a href='/Global/GPDRR' target='_blank'>
												GPDRR
											</a>
										</p>
										<p>
											{' '}
											<a href='/Global/AMCDRR' target='_blank'>
												AMCDRR
											</a>
										</p>
										<p>
											{' '}
											<a href='/Global/sendai-framework' target='_blank'>
												Sendai Framework
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- ================================ CONTACT ========================== --> */}

				<div id='contact'>
					<div className='contact-content'>
						<div className='text-grid'>
							<div className='text-grid-main'>
								<div className='container'>
									<div className='row'>
										<div className='col-md-12 col-sm-12'>
											<div className='main-title text-center wow fadeIn'>
												<h3>Contacts And Helplines</h3>
												<div className='underline1'></div>
												<div className='underline2'></div>
												<p></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='contact-grid'>
							<div className='contact-form-details wow fadeIn'>
								<div className='container'>
									<div className='row contact-info-row text-center wow fadeIn'>
										<div className='col-md-3 col-sm-6 contact-colamn'>
											<div className='contact-col-info' data-wow-delay='.2s'>
												<i
													className='fa fa-map-marker contact-icon'
													aria-hidden='true'
												></i>
												<h3>Address</h3>
												<p>
													Disaster Management Division, Ministry of Home
													Affairs, Government of India 3rd Floor, NDCC-II
													Building, Jai Singh Road, New Delhi-110001
												</p>
												<p>Kolkata, West Bengal, India</p>
											</div>
										</div>
										<div className='col-md-3 col-sm-6 contact-colamn'>
											<div className='contact-col-info' data-wow-delay='.4s'>
												<i
													className='fa fa-envelope contact-icon'
													aria-hidden='true'
												></i>
												<h3>Email</h3>
												<a
													href='mailto:contact.helpthem@gmail.com'
													style={{
														color: 'black',
														textDecoration: 'none',
														fontSize: '17px',
													}}
												>
													contact.helpthem@gmail.com
												</a>
											</div>
										</div>
										<div className='col-md-3 col-sm-6 contact-colamn'>
											<div className='contact-col-info' data-wow-delay='.6s'>
												<i
													className='fa fa-mobile contact-icon'
													aria-hidden='true'
												></i>
												<h3>Control Rooms</h3>
												<h3>Phone</h3>
												<a
													href='tel:8372876775'
													style={{
														color: 'black',
														textDecoration: 'none',
														fontSize: '17px',
													}}
												>
													National Emergency Response Center, Disaster
													Management Division, Ministry of Home Affairs : Phone
													No. : 011-23438252,011-23438250
												</a>
											</div>
										</div>
										<div className='col-md-3 col-sm-6 contact-colamn'>
											<div className='contact-col-info' data-wow-delay='.6s'>
												<i
													className='fa fa-mobile contact-icon'
													aria-hidden='true'
												></i>
												<h3>Dial Up</h3>
												<h3>HelpLine</h3>
												<a
													href='tel:8372876775'
													style={{
														color: 'black',
														textDecoration: 'none',
														fontSize: '17px',
													}}
												>
													Helpline: 011 1070 National Disaster Management
													Authority:
													<ul>Phone No. : 011 26701728/730</ul> Fax: 011
													26701729 Helpline: 011 1078 +91 8372876775
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.StrictMode>
	);
};

export default Home;
