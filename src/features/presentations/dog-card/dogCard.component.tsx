import { SubTitle, Text } from "@/components/text"
import circleDog from "@/assets/circle-dog.webp"
import { BigButton } from "@/components/button"

const DogCard = () => {
	return (
		<section className='flex flex-col justify-center z-30 h-[90vh]'>
			<div className='flex gap-10 m-auto justify-center items-center min-w-[1300px] max-w-[1400px] bg-secondary p-10 rounded-3xl'>
				<img className='h-[400px]' src={circleDog} alt='' />
				<div className='flex flex-col gap-10'>
					<SubTitle className='text-yellow-300'>Make Fetch! Happen</SubTitle>
					<Text size='big' className='text-onSecondary'>
						If you love pets and want exciting work, apply to be a Fetch! <br /> Pet Care Provider! We train
						every team member and provide <br /> ongoing support to help you get the most from your
					</Text>
					<BigButton className="text-primary bg-yellow-50" size='medium' type='submit'>
						Join Now
					</BigButton>
				</div>
			</div>
		</section>
	)
}

export default DogCard
