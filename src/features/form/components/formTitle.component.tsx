interface FormTitleProps {
	children: string
}

const FormTitle = ({ children }: FormTitleProps) => {
	return (
		<div className="border-l-[8px] border-primary py-1 pl-7 my-5 z-1">
			<div className=""></div>
			<h2 className='font-bold text-2xl uppercase'>{children}</h2>
		</div>
	)
}

export default FormTitle
