interface BigButtonProps {
	children: string
	size?: "small" | "medium" | "large"
	colorClassName?: string
	className?: string
	type?: "submit" | "reset" | "button"
	uppercase?: boolean
}

const BigButton = ({ children, size, colorClassName, className, type, uppercase, ...props }: BigButtonProps) => {
	const sizeStylesHandler = () => {
		switch (size) {
			case "small":
				return "px-4 py-2 text-sm"
			case "medium":
				return "px-6 py-3 text-base"
			case "large":
				return "px-9 py-4 text-lg"
		}
	}

	return (
		<button
			className={`${className} ${colorClassName} ${sizeStylesHandler()} ${uppercase && "uppercase"}
			 text-onSecondary rounded-full w-fit min-w-36 font-semibold bg-blue-500 hover:bg-blue-700`}
			type={type}
			{...props}
		>
			{children}
		</button>
	)
}

export default BigButton

