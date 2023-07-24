import { motion } from 'framer-motion';
import AboutUs from '../component/AboutUs';
import './output.css'


import MeetOurRocks from '../component/MeetOurRocks'


// import AboutUs from './AboutUs';


export default function About() {
	return (
	<>
		<div className='bg-dark'>
		<div className="mx-6 md:mx-10 pt-32 bg-dark text-light">
			
			<motion.h1
				className="text-3xl sm:text-4xl md:text-5xl font-medium text-center my-10 uppercase"
				initial={{
					y: 200,
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
				transition={{
					duration: 0.4,
					type: 'spring',
					stiffness: 200,
					damping: 20,
				}}
			>
				About Us
			</motion.h1>
			<AboutUs />
			<motion.h1
				className="text-3xl sm:text-4xl md:text-5xl font-medium text-center my-10 mt-12 uppercase"
				initial={{
					y: 200,
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
				transition={{
					duration: 0.4,
					type: 'spring',
					stiffness: 200,
					damping: 20,
					delay: 0.4,
				}}
			>
				Meet Our Rocks
			</motion.h1>
			<MeetOurRocks />
		</div>
		</div>
		</>
	);
}
