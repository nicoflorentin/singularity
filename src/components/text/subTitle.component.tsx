interface SubTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	children: string
	className?: string
}

const SubTitle = ({ children, className, ...props }: SubTitleProps) => {
	return (
		<h1 className={`text-5xl font-extrabold ${className}`} {...props}>
			{children}
		</h1>
	)
}

export default SubTitle
