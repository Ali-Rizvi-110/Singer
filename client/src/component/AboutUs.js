import { motion } from 'framer-motion';


export default function AboutUs() {
	return (
		<motion.div
			className="flex gap-5 flex-col lg:max-w-[900px] lg:flex-row mx-auto max-w-[700px] xl:max-w-[1100px] bg-[#0d0d0d] p-5 rounded-md"
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
				delay: 0.2,
			}}
		>
			<div className="rounded overflow-hidden">
				<img
					src="/01-11.jpg"
					className="h-full w-full lg:w-auto object-cover"
					alt="crew image4"
				/>
			</div>
			<div className="p-2 lg:p-0">
				<h2 className="text-4xl font-medium mb-6">About Antheme</h2>
				<p className="lg:w-[50ch]">
					Collaborative negotiate next-generation web-readiness rather than
					market driven data. Continually incubate synergistic meta-services
					before outsourcing. Proactive synthesize dynamic web services vis
					installed base products. Holisticly disseminate proactive networks
					without user friendly technologies. Uniquely disseminate client
					centered alignments with economically sound human capital.
					<div className="my-6"></div>
					Competent customize B2B collaboration and idea-sharing whereas process
					centric benefits. Authoritative productize intermandated solutions
					whereas next-generation methods of empowerment. Continually simplify
					cutting-edge content vis-a-vis cross unit networks. Credibly optimize
					low-risk.
				</p>
			</div>
		</motion.div>
	);
}
