interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	children: string
}

const Title = ({ children, ...props }: TitleProps) => {
	return (
		<h1 className='text-6xl font-bold' {...props}>
			{children}
		</h1>
	)
}

export default Title
