import { DogCard, Footer, NavBar, OurServices, Owners } from "@/features/presentations"
import above from "../assets/above.svg"
import circleDog from "../assets/circle-dog.webp"
import { HowItWorks } from "@/features/presentations"
import { Outlet } from "react-router-dom"

const Home = () => {
	return (
		<div className='overflow-hidden'>
			<div className='relative h-screen'>
				<img className='absolute min-w-[1500px] w-full' src={above} alt='' />
				<div className='relative flex flex-col z-10 h-full'>
					<NavBar />
					<section className='flex grow items-center justify-around'>
						<div className='self-end mb-[15%]'>
							<Outlet />
						</div>
						<div className=' flex justify-center relative'>
							<img className='max-w-[600px]' src={circleDog} alt='' />
						</div>
					</section>
				</div>
			</div>
			<OurServices />
			<Owners />
			<HowItWorks />
			<DogCard />
			<Footer />
		</div>
	)
}

export default Home
