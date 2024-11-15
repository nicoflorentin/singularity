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
				className='peer w-full h-14 px-8 pt-4 .pb-2 text-gray-700 shadow-input
        focus:border-onBackground focus:outline-none bg-transparent'
			/>
			<label
				htmlFor={id}
				className='absolute left-8 cursor-text
        transition-all duration-100 
        peer-placeholder-shown:text-[18px] peer-placeholder-shown:leading-[1.5] peer-placeholder-shown:text-onBackground peer-placeholder-shown:top-5
        peer-focus:top-2 peer-focus:text-sm  peer-focus:text-onBackground
        top-2 text-sm text-onBackground'
			>
				{label}
			</label>
		</div>
	)
}

export default FormInput
