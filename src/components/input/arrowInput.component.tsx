import Arrow from "../button/arrow"

const ArrowInput = () => {
	return (
		<div className='flex justify-between bg-white rounded-full w-72 py-2 pl-7 pr-2 shadow-surface'>
			<input
				className='grow-0 w-44 outline-none .focus-visible:border-0 bg-transparent'
				type='text'
				placeholder='Zip Code'
				style={{ fontSize: "1.5rem" }}
			/>
			<Arrow />
		</div>
	)
}

export default ArrowInput
