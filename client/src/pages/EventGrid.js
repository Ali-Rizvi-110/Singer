import { v4 as uuid } from 'uuid';
import { motion } from 'framer-motion';
import EvenGridCard from '../component/EventGridCard';

export default function EventGrid() {
	const events = [
		{
			image: '/07-360x320.jpg',
			title: 'Jhingjog Music Hour',
			location: 'Chardrapur, California USA',
			date: '27 february, 2022',
			time: '8:00 PM',
			price: 29,
		},
		{
			image: '/08-360x320.jpg',
			title: 'Annual Music Festival',
			location: 'Chardrapur, California USA',
			date: '27 february, 2022',
			time: '8:00 PM',
			price: 29,
		},
		{
			image: '/09-360x320.jpg',
			title: 'California Music Time',
			location: 'Chardrapur, California USA',
			date: '27 february, 2022',
			time: '8:00 PM',
			price: 29,
		},
		{
			image: '/10-360x320.jpg',
			title: 'Nevada Musical Concert',
			location: 'Chardrapur, California USA',
			date: '27 february, 2022',
			time: '8:00 PM',
			price: 29,
		},
		{
			image: '/11-360x320.jpg',
			title: 'World Tour 2017',
			location: 'Chardrapur, California USA',
			date: '27 february, 2022',
			time: '8:00 PM',
			price: 29,
		},
		{
			image: '/Galry_img_03-360x448.jpg',
			title: 'Chochella Music Hour',
			location: 'Chardrapur, California USA',
			date: '27 february, 2022',
			time: '8:00 PM',
			price: 29,
		},
	];

	return (
		<>
		<div className='pt-32 text-light bg-dark'>
			<motion.h1
				className="text-5xl uppercase text-center mb-9"
				initial={{
					y: 200,
					opacity: 0,
					scale: 0.8,
				}}
				animate={{
					y: 0,
					opacity: 1,
					scale: 1.1,
				}}
				transition={{
					type: 'spring',
					stiffness: 200,
					damping: 20,
				}}
			>
				{'Event Grid View'.split('').map((char, i) => (
					<motion.span
						initial={{
							opacity: 0,
							scale: 0.8,
						}}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						transition={{
							duration: 0.2,
							type: 'smooth',
							delay: i / 20,
						}}
					>
						{char}
					</motion.span>
				))}
			</motion.h1>
			<motion.div
				className="bg-[#0d0d0d] grid lg:grid-cols-3 gap-5 items-start w-fit justify-center mx-auto p-5 rounded-md h-min"
				initial={{ y: 300, scale: 0.8, opacity: 0.3 }}
				animate={{ y: 0, scale: 1, opacity: 1 }}
				transition={{
					type: 'spring',
					stiffness: 200,
					damping: 20,
				}}
			>
				{events.map((event, i) => (
					<EvenGridCard
						key={uuid()}
						imageUrl={event.image}
						title={event.title}
						date={event.date}
						location={event.location}
						time={event.time}
						price={event.price}
						delay={i / 10 + 0.3}
					/>
				))}
			</motion.div>

			</div>
		</>
	);
}
