import { SubTitle, Text } from "@/components/text"
import azul from "@/assets/azulvect.svg"

const OurServices = () => {
	return (
		<div className='h-screen'>
				<img className='absolute -translate-y-[100px] w-full' src={azul} alt='' />
				<div className='relative z-10 flex flex-col justify-center w-1/2 h-full'>
					<div className='relative flex flex-col gap-10 w-[500px] m-auto'>
						<SubTitle className='text-primary'> Our Services </SubTitle>
						<Text className='text-onBackground' size='medium'>
							National Brand With a Local Feel. <br /> Experience The Fetch! Difference
						</Text>
						<Text className='font-extrabold text-primary' size='medium'>
							Enter Your Location and Fetch Our Services
						</Text>
					</div>
				</div>
				<div className='w-1/2'></div>
			</div>
	)
}

export default OurServices