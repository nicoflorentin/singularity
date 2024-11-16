import { useNavigate } from "react-router-dom"

interface NavlinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
	navigateTo?: string
}

const Navlink = ({ children, navigateTo, ...props }: NavlinkProps) => {
	const navigate = useNavigate()
	return (
		<a {...props} className="cursor-pointer text-2xl" onClick={() => navigateTo && navigate(navigateTo)}>
			{children}
		</a>
	)
}

export default Navlink
