import { BigButton } from "@/components/button"
import { FormInput, FormTitle } from "@/features/form/components"
import { LoginPresentation } from "@/features/presentations"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { LoginData } from "@/types/login"
import axios from "axios"
import { useCookies } from "react-cookie"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { validateFields } from "@/features/auth/helpers/validateFields"

const Login = () => {
	const [username, setUsername] = useState("eve.holt@reqres.in")
	const [password, setPassword] = useState("cityslicka")
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const [cookies, setCookie] = useCookies(["user"])

	const login = async (userLogin: LoginData) => {
		console.log("login", userLogin)
		const { data, status } = await axios.post("https://reqres.in/api/login", { email: username, password })

		if (status !== 200) {
			throw new Error("Login failed")
		}
		return data
	}

	const loginMutation = useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			navigate("/home")
			setLoading(false)
			setCookie("user", { token: data.token }, { path: "/" })
		},
		onError: (err) => {
			console.log(err.message)
			toast("Login failed", { type: "error" })
			setLoading(false)
		},
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const { isValid } = validateFields({ username, password }, toast)
		if (!isValid) return

		setLoading(true)
		loginMutation.mutate({ username, password })
	}

	return (
		<div className='h-screen flex'>
			<ToastContainer />
			{/* Left side - Presentation */}
			<div className='w-1/2'>
				<LoginPresentation />
			</div>
			{/* Right side - Form */}
			<div className='w-1/2 p-20'>
				<form onSubmit={handleSubmit} className='h-full flex flex-col justify-center gap-3 w-[500px]'>
					<FormTitle>Bienvenido</FormTitle>
					<div className='flex flex-col gap-3'>
						<FormInput
							value={username}
							formNoValidate={false}
							type='email'
							label='EMAIL'
							id='username'
							onChange={(e) => setUsername(e.target.value)}
						/>
						<FormInput
							value={password}
							type='password'
							label='CONTRASEÑA'
							id='password'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className='text-right my-5 self-end'>
						<a href='#' className='text-sm text-onBackground hover:text-gray-500'>
							¿Olvidaste tu contraseña?
						</a>
					</div>
					<div className='flex flex-col gap-6 justify-center'>
						<BigButton className='mx-auto' size='large' type='submit' uppercase disabled={loading}>
							{loading ? "Cargando..." : "Iniciar Sesión"}
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
