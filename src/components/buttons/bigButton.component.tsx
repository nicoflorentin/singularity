// extiendo la interfaz para que pueda recibir otras props de button tales como onClick o disabled
interface BigButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: string
	size?: "small" | "medium" | "large"
	className?: string
	uppercase?: boolean
}

const BigButton = ({ children, size, className, type, uppercase, ...props }: BigButtonProps) => {
	const sizeStylesHandler = () => {
		switch (size) {
			case "small":
				return "px-4 py-2 text-sm"
			case "medium":
				return "px-6 py-3 text-base"
			case "large":
				return "px-12 py-6 text-lg"
		}
	}

	return (
		<button
			className={`${className} ${sizeStylesHandler()} ${uppercase && "uppercase"}
			 text-onSecondary rounded-full w-fit min-w-36 font-semibold bg-blue-500 hover:bg-secondary-dark shadow-bigButton`}
			{...props}
		>
			{children}
		</button>
	)
}

export default BigButton
