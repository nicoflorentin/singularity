import Arrow from "../button/arrow"

interface ArrowInputProps {
	placeholder: string
}

const ArrowInput = ({ placeholder }: ArrowInputProps) => {
	return (
		<div className='flex justify-between text-gray-600 bg-white rounded-full w-72 py-2 pl-7 pr-2 shadow-surface'>
			<input
				className='grow-0 w-44 outline-none .focus-visible:border-0 bg-transparent'
				type='text'
				placeholder={placeholder}
				style={{ fontSize: "1.5rem" }}
			/>
			<Arrow />
		</div>
	)
}

export default ArrowInput
