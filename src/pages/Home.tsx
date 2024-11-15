import { BigButton } from "@/components/buttons"
import { Text, Title } from "@/components/text"
import { NavBar } from "@/features/presentations"

const Home = () => {
	return (
		<div className='flex flex-col'>
			<NavBar />
			<section className='flex grow border'>
				<div className='flex flex-col gap-8 w-1/2'>
					<Title>We Get Pet Care!</Title>
					<Text size="medium">
						For over 17 years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!
					</Text>
					<div className='flex gap-8 items-center'>
						<BigButton size='large' uppercase type='submit'>
							Schedule a Service
						</BigButton>
						<Text size="small">Or Call 866.338.2463</Text>
					</div>
				</div>
				<div className='w-1/2'>imagen de perro</div>
			</section>
		</div>
	)
}

export default Home
