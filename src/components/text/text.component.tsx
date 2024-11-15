interface TitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
	size?: "big" | "medium" | "small" | "tiny"
	className?: string
}

// hago tipado de children desde la interfaz extendida para poder recibir por parametros etiquetas tales como br o span

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

const Title = ({ size, className, ...props }: TitleProps) => {
	return (
		<p className={`${titleSize(size)} ${className}`} {...props}>
			{props.children}
		</p>
	)
}

export default Title
