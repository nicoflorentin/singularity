import { BigButton } from "@/components/button"
import { Text, Title } from "@/components/text"
import { NavBar, OurServices, Owners } from "@/features/presentations"
import above from "../assets/above.svg"
import circleDog from "../assets/circle-dog.webp"
import { HowItWorks } from "@/features/presentations"

const Home = () => {
	return (
		<div>
			<div className='relative h-screen'>
				<img className='absolute w-full' src={above} alt='' />
				<div className='relative flex flex-col z-10 h-full'>
					<NavBar />
					<section className='flex grow items-center px-32'>
						<div className='flex flex-col gap-8 w-1/2 text-onPrimary'>
							<Title>We Get Pet Care!</Title>
							<Text className='w-[550px]' size='medium'>
								For over 17 years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and
								happy!
							</Text>
							<div className='flex gap-8 items-center'>
								<BigButton size='medium' type='submit'>
									Schedule a Service
								</BigButton>
								<Text size='small'>Or Call 866.338.2463</Text>
							</div>
						</div>
						<div className='w-1/2 flex justify-center relative left-[100px]'>
							<img src={circleDog} alt='' />
						</div>
					</section>
				</div>
			</div>
			<OurServices />
			<Owners />
			<HowItWorks />
		</div>
	)
}

export default Home
