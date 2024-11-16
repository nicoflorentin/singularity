interface SubTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	className?: string
	size?: "small" | "medium" | "large"
}

const SubTitle = ({ children, className, size, ...props }: SubTitleProps) => {
	const sizeStylesHandler = () => {
		switch (size) {
			case "small":
				return "text-3xl"
			case "medium":
				return "text-4xl"
			case "large":
				return "text-5xl"
			default:
				return "text-5xl"
		}
	}

	return (
		<h2 className={`   ${sizeStylesHandler()} font-extrabold ${className}`} {...props}>
			{children}
		</h2>
	)
}

export default SubTitle
