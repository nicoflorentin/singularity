interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	children: string
	className?: string
}

const Title = ({ children, className, ...props }: TitleProps) => {
	return (
		<h1 className={`text-8xl font-bold ${className}`} {...props}>
			{children}
		</h1>
	)
}

export default Title
