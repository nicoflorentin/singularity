import { Navlink } from "@/components/link"
import { SubTitle } from "@/components/text"
import darkCat from "@/assets/dark-cat.svg"

const Error404 = () => {
	return (
		<div className='relative flex flex-col gap-10 justify-center items-center h-screen text-center '>
			<img className='absolute z-0 h-[500px]' src={darkCat} alt='darkcat' />
			<div className="z-10 relative top-[50px]">
				<SubTitle size="large" className='text-primary'>Error 404</SubTitle>
				<SubTitle size='small' className='text-primary'>
					It looks like you are lost
				</SubTitle>
			<Navlink navigateTo='/'><p className="z-10 text-onPrimary">	Go Back</p></Navlink>
			</div>
		</div>
	)
}

export default Error404
