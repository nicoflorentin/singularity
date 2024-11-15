import backGround from "@/assets/bg-svg.svg"
import dogCat from "@/assets/dog-cat.svg"

const LoginPresentation = () => {
	return (
		<>
			<img className='absolute min-w-[900px] w-7/12' src={backGround} alt='' />
			<img
				className='absolute h-[400px] top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2'
				src={dogCat}
				alt=''
			/>
		</>
	)
}

export default LoginPresentation
