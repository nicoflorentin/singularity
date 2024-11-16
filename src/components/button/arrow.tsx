import rightArrow from "@/assets/right-arrow.png"

interface ArrowProps {
	className?: string
}

const Arrow = ({ className, ...props }: ArrowProps) => {
	return (
		<div {...props} className={`${className} flex justify-center items-center rounded-full w-16 h-16 bg-orange`}>
			<img className='w-[50%] invert' src={rightArrow} alt='right-arrow' />
		</div>
	)
}

export default Arrow
