import { motion, animate, stagger, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function MeetOurRocks() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			animate(
				'.crew-pic-container',
				{ opacity: [0, 1] },
				{ delay: stagger(0.1), duration: 0.4 }
			);
		}
	}, [isInView]);

	return (
		<motion.div
			ref={ref}
			className="flex flex-col sm:flex-wrap lg:flex-nowrap lg:max-w-[900px] sm:flex-row mx-auto max-w-[700px] rounded-md xl:max-w-[1100px] bg-[#0d0d0d] p-5"
			initial={{ y: 200 }}
			whileInView={{ y: 0, once: true }}
			transition={{
				duration: 0.4,
				type: 'spring',
				stiffness: 200,
				damping: 20,
				delay: 0.2,
			}}
		>
			<div className="crew-pic-container overflow-hidden sm:w-1/2">
				<img
					src="/01-7.jpg"
					className="w-full object-cover hover:scale-110 transition-transform duration-300"
					alt="crew image1"
				/>
			</div>
			<div className="crew-pic-container overflow-hidden sm:w-1/2">
				<img
					src="/02-4.jpg"
					className="w-full object-cover hover:scale-110 transition-transform duration-300"
					alt="crew image2"
				/>
			</div>
			<div className="crew-pic-container overflow-hidden sm:w-1/2">
				<img
					src="/03-3.jpg"
					className="w-full object-cover hover:scale-110 transition-transform duration-300"
					alt="crew image3"
				/>
			</div>
			<div className="crew-pic-container overflow-hidden sm:w-1/2">
				<img
					src="/04-1.jpg"
					className="w-full object-cover hover:scale-110 transition-transform duration-300"
					alt="crew image4"
				/>
			</div>
		</motion.div>
	);
}
