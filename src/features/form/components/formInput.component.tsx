import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
}

const FormInput = ({ label, id, ...props }: InputProps) => {

	return (
		<div className='relative'>
			<input
				{...props}
				id={id}
				placeholder=''
				className='peer w-full h-14 px-4 pt-4 .pb-2 text-gray-800 shadow-input
        focus:border-gray-500 focus:outline-none bg-transparent'
			/>
			<label
				htmlFor={id}
				className='absolute left-4 cursor-text
        transition-all duration-200 
        peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[1.5] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6
        peer-focus:top-3 peer-focus:text-xs  peer-focus:text-gray-400
        top-3 text-xs text-gray-400'
			>
				{label}
			</label>
		</div>
	)
}

export default FormInput
