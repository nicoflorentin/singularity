interface TitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
	children: string
	size?: "big" | "medium" | "small" | "tiny"
}
const titleSize = (size: string | undefined): string => {
	switch (size) {
		case "big":
			return "text-4xl"
		case "medium":
			return "text-2xl"
		case "small":
			return "text-xl"
		case "tiny":
			return "text-lg"
		default:
			return "text-md"
	}
}

const Title = ({ children, size, ...props }: TitleProps) => {
	return (
		<p className={`${titleSize(size)}`} {...props}>
			{children}
		</p>
	)
}

export default Title
