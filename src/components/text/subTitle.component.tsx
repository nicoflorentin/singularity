interface SubTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	className?: string
}

const SubTitle = ({ children, className, ...props }: SubTitleProps) => {
	return (
		<h2 className={`text-5xl font-extrabold ${className}`} {...props}>
			{children}
		</h2>
	)
}

export default SubTitle
