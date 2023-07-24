import React, { useEffect, useState } from 'react';
import './Homepage.css';
import { purple } from './Data';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { event } from './Eventdata';
import { recent } from './Recentdata';
import { songs } from './Songdata';
import { photos } from './Photosdata';

const Homepage = () => {
	const [item, setItem] = useState(purple);
	const [ivent, setIvent] = useState(event);
	const [resent, setResent] = useState(recent);
	const [song, setSong] = useState(songs);
	// const [image, setImage] = useState(photos);

	const navigate = useNavigate();
	const [clickedImageIndex, setClickedImageIndex] = useState(null);

	const handleImageClick = (index) => {
		setClickedImageIndex(index);
	};

	const handleCloseImage = () => {
		setClickedImageIndex(null);
	};

	const handleDelete = (index) => {
		const updateSong = [...song];
		updateSong.splice(index, 1);
		setSong(updateSong);
	};

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.2,
			},
		},
	};

	const listItem = {
		hidden: { opacity: 0, y: 200 },
		show: { opacity: 1, y: 0 },
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		// <div>
		<div>
			<div id="main" className="homepage">
				<motion.div
					className="image1"
					style={{
						transformPerspective: 1000,
						transformOrigin: 'top',
					}}
					initial={{
						y: 300,
						rotateX: -30,
						scale: 0.8,
						opacity: 0,
					}}
					animate={{ rotateX: 0, scale: 1, y: 0, opacity: 1 }}
					transition={{
						type: 'tween',
						duration: 0.4,
					}}
				>
					<div className="matter">
						<motion.h1
							className="show"
							initial={{
								y: 200,
								opacity: 0,
							}}
							animate={{
								y: 0,
								opacity: 1,
							}}
							transition={{
								type: 'tween',
								duration: 0.2,
								delay: 0.1,
							}}
						>
							UPCOMING SHOW
						</motion.h1>
						<motion.h4
							initial={{
								y: 200,
								opacity: 0,
							}}
							animate={{
								y: 0,
								opacity: 1,
							}}
							transition={{
								type: 'tween',
								duration: 0.3,
								delay: 0.2,
							}}
						>
							<i class="ri-map-pin-line"></i>France, DIvision No. 21,
							Unorganize, MB.
						</motion.h4>
						<motion.h4
							initial={{
								y: 200,
								opacity: 0,
							}}
							animate={{
								y: 0,
								opacity: 1,
							}}
							transition={{
								type: 'tween',
								duration: 0.4,
								delay: 0.3,
							}}
						>
							<i class="ri-calendar-2-line"></i>15 February,2023
						</motion.h4>
						<motion.button
							initial={{
								y: 200,
								opacity: 0,
							}}
							animate={{
								y: 0,
								opacity: 1,
							}}
							transition={{
								type: 'tween',
								duration: 0.2,
								delay: 0.4,
							}}
						>
							REGISTER NOW
						</motion.button>
						<motion.div
							className="time"
							initial={{
								y: 200,
								opacity: 0,
							}}
							animate={{
								y: 0,
								opacity: 1,
							}}
							transition={{
								type: 'tween',
								duration: 0.5,
								delay: 0.5,
							}}
						>
							<motion.div
								className="days"
								initial={{
									x: 200,
									opacity: 0,
								}}
								animate={{
									x: 0,
									opacity: 1,
								}}
								transition={{
									type: 'spring',
									damping: 10,
									stiffness: 100,
									delay: 0.6,
								}}
							>
								<h1>148 </h1>
								<span>DAYS</span>
							</motion.div>
							<motion.div
								className="days"
								initial={{
									x: 200,
									opacity: 0,
								}}
								animate={{
									x: 0,
									opacity: 1,
								}}
								transition={{
									type: 'spring',
									damping: 10,
									stiffness: 100,
									delay: 0.7,
								}}
							>
								<h1>19 </h1>
								<span>HOURS</span>
							</motion.div>
							<motion.div
								className="days"
								initial={{
									x: 200,
									opacity: 0,
								}}
								animate={{
									x: 0,
									opacity: 1,
								}}
								transition={{
									type: 'spring',
									damping: 10,
									stiffness: 100,
									delay: 0.8,
								}}
							>
								<h1>43 </h1>
								<span>MINUTES</span>
							</motion.div>
							<motion.div
								className="days"
								initial={{
									x: 200,
									opacity: 0,
								}}
								animate={{
									x: 0,
									opacity: 1,
								}}
								transition={{
									type: 'spring',
									damping: 10,
									stiffness: 100,
									delay: 0.9,
								}}
							>
								<h1>04 </h1>
								<span>SECONDS</span>
							</motion.div>
						</motion.div>
					</div>
				</motion.div>

				<motion.div
					className="purple"
					style={{}}
					viewport={{ once: true }}
					initial={{
						y: 200,
					}}
					whileInView={{
						y: 0,
					}}
					transition={{
						duration: 0.4,
						type: 'tween',
					}}
				>
					<h1>RECENT RELEASE</h1>
					<div className="imagecontainer">
						{item.map((item, index) => (
							<motion.div
								className="detail"
								key={index}
								viewport={{ once: true }}
								initial={{
									opacity: 0,
									y: 200,
								}}
								whileInView={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									delay: index / 10,
									duration: 0.4,
									type: 'tween',
								}}
							>
								<div
									className="images"
									onClick={() => {
										// console.log("hello", index);

										navigate(`/Album/${index}`);
									}}
								>
									<img src={`${item.img}`} alt="" />

									<i class="ri-music-2-fill"></i>
								</div>
								<div className="desc">
									<h4>{item.name}</h4>
									<h6>Released On:{item.date}</h6>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				<div className="photogallery">
					<div
						className="photos"
						style={{
							height: '100vh',
							background: 'black',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						{photos.map((image, index) => (
							<motion.div
								initial={{
									y: 200,
									opacity: 0,
								}}
								whileInView={{
									y: 0,
									opacity: 1,
								}}
								transition={{ type: 'tween', duration: 0.3, delay: index / 10 }}
								viewport={{ once: true }}
								className="photos1"
								key={index}
								onClick={() => handleImageClick(index)}
							>
								<img src={`${image.img}`} alt="" />
							</motion.div>
						))}
					</div>

					<div className="">
						{clickedImageIndex !== null && (
							<div className="overlay">
								<div className="overlayimg">
									<img
										src={photos[clickedImageIndex].img}
										alt=""
										className="enlarged-image"
									/>
								</div>
								<div className="john">
									<h2>{photos[clickedImageIndex].title}</h2>
									<h6>Vocal</h6>
									<p>{photos[clickedImageIndex].desc}</p>
									<div className="overlayicon">
										<i class="ri-facebook-fill"></i>
										<i class="ri-twitter-fill"></i>
										<i class="ri-linkedin-fill"></i>
									</div>
								</div>
								<div>
									<span
										className="close-btn btn btn-secondary rounded-circle fs-3 me-2 mt-2 px-3"
										onClick={handleCloseImage}
									>
										&times;
									</span>
								</div>
							</div>
						)}
					</div>
				</div>

				<motion.div
					className="galleryphoto"
					viewport={{ once: true }}
					initial={{
						y: 300,
					}}
					whileInView={{
						y: 0,
					}}
					transition={{
						duration: 0.4,
						delay: 0.1,
					}}
					style={{}}
				>
					<motion.div
						className="photo"
						viewport={{ once: true }}
						initial={{
							y: 200,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 0.3,
							delay: 0.1,
						}}
					>
						<h3>Photo Gallery</h3>
						<div className="photoup d-flex">
							<motion.img
								viewport={{ once: true }}
								initial={{
									scale: 0.5,
									opacity: 0,
									y: 100,
								}}
								whileInView={{
									scale: 1,
									opacity: 1,
									y: 0,
								}}
								transition={{
									type: 'spring',
									damping: 20,
									stiffness: 200,
									delay: 0.1,
								}}
								src="http://demos.codexcoder.com/anthem/wp-content/uploads/2018/04/Galry_img_02-398x325.jpg"
								alt=""
								className="big"
							/>
							<div className="d-flex flex-column">
								<motion.img
									viewport={{ once: true }}
									initial={{
										scale: 0.5,
										opacity: 0,
										y: 100,
									}}
									whileInView={{
										scale: 1,
										opacity: 1,
										y: 0,
									}}
									transition={{
										type: 'spring',
										damping: 20,
										stiffness: 200,
										delay: 0.2,
									}}
									src="http://demos.codexcoder.com/anthem/wp-content/uploads/2018/04/Galry_img_01-165x162.jpg"
									alt=""
									className="small"
								/>
								<motion.img
									viewport={{ once: true }}
									initial={{
										scale: 0.5,
										opacity: 0,
										y: 100,
									}}
									whileInView={{
										scale: 1,
										opacity: 1,
										y: 0,
									}}
									transition={{
										type: 'spring',
										damping: 20,
										stiffness: 200,
										delay: 0.3,
									}}
									src="http://demos.codexcoder.com/anthem/wp-content/uploads/2018/04/Galry_img_04-165x162.jpg"
									alt=""
									className="small"
								/>
							</div>
						</div>
						<div className="photodown d-flex">
							<div className="d-flex flex-column">
								<motion.img
									viewport={{ once: true }}
									initial={{
										scale: 0.5,
										opacity: 0,
										y: 100,
									}}
									whileInView={{
										scale: 1,
										opacity: 1,
										y: 0,
									}}
									transition={{
										type: 'spring',
										damping: 20,
										stiffness: 200,
										delay: 0.1,
									}}
									src="http://demos.codexcoder.com/anthem/wp-content/uploads/2018/04/Galry_img_05-165x162.jpg"
									alt=""
									className="small"
								/>
								<motion.img
									viewport={{ once: true }}
									initial={{
										scale: 0.5,
										opacity: 0,
										y: 100,
									}}
									whileInView={{
										scale: 1,
										opacity: 1,
										y: 0,
									}}
									transition={{
										type: 'spring',
										damping: 20,
										stiffness: 200,
										delay: 0.1,
									}}
									src="http://demos.codexcoder.com/anthem/wp-content/uploads/2018/04/Galry_img_09-165x162.jpg"
									alt=""
									className="small"
								/>
							</div>
							<motion.img
								viewport={{ once: true }}
								initial={{
									scale: 0.5,
									opacity: 0,
									y: 100,
								}}
								whileInView={{
									scale: 1,
									opacity: 1,
									y: 0,
								}}
								transition={{
									type: 'spring',
									damping: 20,
									stiffness: 200,
									delay: 0.3,
								}}
								src="http://demos.codexcoder.com/anthem/wp-content/uploads/2018/04/Galry_img_10-398x325.jpg"
								alt=""
								className="big"
							/>
						</div>
					</motion.div>
					<motion.div
						className="video"
						viewport={{ once: true }}
						initial={{
							y: 200,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 0.3,
							delay: 0.4,
						}}
					>
						<h3>Video Gallery</h3>
						<motion.div
							className="videoup"
							viewport={{ once: true }}
							initial={{
								y: 200,
								opacity: 0,
							}}
							whileInView={{
								y: 0,
								opacity: 1,
							}}
							transition={{
								duration: 0.5,
							}}
						>
							<iframe
								src="https://www.youtube.com/embed/61SJuITd3Xo"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</motion.div>
						<motion.div
							className="fulldown"
							variants={container}
							initial="hidden"
							whileInView="show"
						>
							{song?.map((song, index) => (
								<motion.div
									className="videodown d-flex justify-content-between align-items-center"
									variants={listItem}
									initial="hidden"
									animate="show"
								>
									<div className="d-flex align-items-center">
										<img src={`${song.img}`} alt="" />
										<div>
											<h6>{song.songname}</h6>
											<p>{song.rdate}</p>
										</div>
									</div>
									<h4 onClick={() => handleDelete(index)}>X</h4>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</motion.div>

				<div
					className="showdetail"
					style={{
						paddingTop: 100,
					}}
				>
					<h1>EVENT LIST</h1>
					<div style={{ height: '80%', overFlow: 'scroll' }}>
						{ivent.map((ivent, index) => (
							<motion.div
								initial={{ x: 200, scale: 0.9 }}
								whileInView={{ x: 0, scale: 1 }}
								className="event"
								onClick={() => {
									navigate(`/Eventdetail/${index}`);
								}}
							>
								<div className="eventlist" key={index}>
									<div className="demos">
										<img src={`${ivent.img}`} alt="" className="me-3 rounded" />
										<div>
											<h2>{ivent.title}</h2>
											<div className="row ">
												<h6 className="col-3">Location</h6>
												<h6 className="col-2">:</h6>
												<h6 className="col-7">{ivent.location}</h6>
											</div>

											<div className="row">
												<h6 className="col-3">Date</h6>
												<h6 className="col-2">:</h6>
												<h6 className="col-7">{ivent.date}</h6>
											</div>

											<div className="row">
												<h6 className="col-3">Time</h6>
												<h6 className="col-2">:</h6>
												<h6 className="col-7">{ivent.time}</h6>
											</div>
										</div>
									</div>
									<div className="ticket ">
										<h3 className="ms-5">{ivent.price}</h3>
										<button>BUY TICKET</button>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				<motion.div
					className="yellow"
					viewport={{ once: true }}
					initial={{
						y: 200,
					}}
					whileInView={{
						y: 0,
					}}
					transition={{
						type: 'tween',
						duration: 0.3,
					}}
					style={{}}
				>
					<h4>PRICING TABLE</h4>
					<div className="mainbox">
						<motion.div
							className="silver"
							viewport={{ once: true }}
							initial={{
								y: 200,
								opacity: 0,
							}}
							whileInView={{
								y: 0,
								opacity: 1,
							}}
							transition={{ duration: 0.3, type: 'tween', delay: 0.1 }}
						>
							<h3>Silver</h3>
							<h1>$79.99</h1>
							<h6>Free Seats</h6>
							<h6>Snacks</h6>
							<h6>Drinks</h6>
							<h6>No T-shirt</h6>
							<h6>No Autograps</h6>
							<button>BUY NOW</button>
						</motion.div>

						<motion.div
							className="silver"
							viewport={{ once: true }}
							initial={{
								y: 200,
								opacity: 0,
							}}
							whileInView={{
								y: 0,
								opacity: 1,
							}}
							transition={{ duration: 0.3, type: 'tween', delay: 0.2 }}
						>
							<h3>Platinum</h3>
							<h1>$79.99</h1>
							<h6>Free Seats</h6>
							<h6>Snacks</h6>
							<h6>Drinks</h6>
							<h6>No T-shirt</h6>
							<h6>No Autograps</h6>
							<button>BUY NOW</button>
						</motion.div>

						<motion.div
							className="silver"
							viewport={{ once: true }}
							initial={{
								y: 200,
								opacity: 0,
							}}
							whileInView={{
								y: 0,
								opacity: 1,
							}}
							transition={{ duration: 0.3, type: 'tween', delay: 0.3 }}
						>
							<h3>Gold</h3>
							<h1>$79.99</h1>
							<h6>Free Seats</h6>
							<h6>Snacks</h6>
							<h6>Drinks</h6>
							<h6>No T-shirt</h6>
							<h6>No Autograps</h6>
							<button>BUY NOW</button>
						</motion.div>
					</div>
				</motion.div>

				<div className="recent">
					<h1>RECENT NEWS</h1>
					<div className="recentbox">
						{resent?.map((resent, index) => (
							<motion.div
								className="recentbox1"
								key={index}
								initial={{ y: 200, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ type: 'tween', duration: 0.2, delay: index / 20 }}
							>
								<div
									className="overlay"
									onClick={() => {
										navigate(`/Recentdetail/${index}`);
									}}
								>
									<img src={`${resent.img}`} alt="" />
								</div>
								<h2>{resent.title}</h2>
								<p>{resent.desc}</p>
							</motion.div>
						))}
					</div>
				</div>

				<div className="follow" style={{}}>
					<motion.h1
						viewport={{ once: true }}
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.2 }}
					>
						FOLLOW US
					</motion.h1>
					<motion.div
						viewport={{ once: true }}
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.3, delay: 0.1 }}
					>
						<motion.i
							viewport={{ once: true }}
							initial={{ rotate: 40, y: 100, opacity: 0 }}
							whileInView={{ rotate: 0, y: 0, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.1 }}
							className="ri-youtube-fill"
						></motion.i>
						<motion.i
							viewport={{ once: true }}
							initial={{ rotate: 40, y: 100, opacity: 0 }}
							whileInView={{ rotate: 0, y: 0, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.2 }}
							className="ri-camera-line"
						></motion.i>
						<motion.i
							viewport={{ once: true }}
							initial={{ rotate: 40, y: 100, opacity: 0 }}
							whileInView={{ rotate: 0, y: 0, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.3 }}
							className="ri-facebook-fill"
						></motion.i>
						<motion.i
							viewport={{ once: true }}
							initial={{ rotate: 40, y: 100, opacity: 0 }}
							whileInView={{ rotate: 0, y: 0, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.4 }}
							className="ri-twitter-fill"
						></motion.i>
						<motion.i
							viewport={{ once: true }}
							initial={{ rotate: 40, y: 100, opacity: 0 }}
							whileInView={{ rotate: 0, y: 0, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.5 }}
							className="ri-instagram-fill"
						></motion.i>
					</motion.div>
					<div className="email">
						<motion.input
							viewport={{ once: true }}
							initial={{ y: 100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.2 }}
							type="text"
							name=""
							id=""
							placeholder="Enter Your E-mail Here"
							className=" fw-bold"
						/>
						<motion.button
							viewport={{ once: true }}
							initial={{ y: 100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.3 }}
						>
							Subscribe Now
						</motion.button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
