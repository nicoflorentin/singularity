import { BigButton } from "@/components/buttons"
import { FormInput, FormTitle } from "@/features/form/components"
import { LoginPresentation } from "@/features/presentations"
import { useNavigate } from "react-router-dom"

const Login = () => {
	const navigate = useNavigate()
	// const [formData, setFormData] = useState({
	// 	username: "",
	// 	password: "",
	// })

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// console.log("Form submitted:", formData)
	}

	return (
		<div className='h-screen flex'>
			{/* Left side - Presentation */}
			<div className='w-1/2'>
				<LoginPresentation />
			</div>
			{/* Right side - Form */}
			<div className='w-1/2 p-20'>
				<form onSubmit={handleSubmit} className='h-full flex flex-col justify-center gap-3 w-[500px]'>
					<FormTitle>Bienvenido</FormTitle>
					<div className='flex flex-col gap-3'>
						<FormInput type='email' label='EMAIL' id='username' />
						<FormInput type='password' label='CONTRASEÑA' id='password' />
					</div>
					{/* <input
								id='username'
								type='text'
								value={formData.username}
								onChange={(e) => setFormData({ ...formData, username: e.target.value })}
							/> */}
					<div className='text-right my-5 self-end'>
						<a href='#' className='text-sm text-onBackground hover:text-gray-500'>
							¿Olvidaste tu contraseña?
						</a>
					</div>
					<div className='flex flex-col gap-6 justify-center'>
						<BigButton
							onClick={() => {
								navigate("/home")
							}}
							className='mx-auto'
							size='large'
							type='submit'
							uppercase
						>
							Iniciar Sesión
						</BigButton>
						<p className='uppercase text-center text-onBackground'>
							Aún no tengo cuenta{" "}
							<span>
								<a className='text-secondary' href=''>
									registrarse
								</a>
							</span>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
