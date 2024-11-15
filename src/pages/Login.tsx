import { BigButton } from "@/components/buttons"
import { FormInput, FormTitle } from "@/features/form/components"
// import React, { useState } from "react"

const Login = () => {
	// const [formData, setFormData] = useState({
	// 	username: "",
	// 	password: "",
	// })

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log("Form submitted:", formData)
	}

	return (
		<div className='h-screen flex'>
			{/* Left side - Pattern */}
			<div className='w-1/2 bg-gray-50'>
				<svg width='100%' height='100%' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'>
					<pattern id='pattern' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'>
						<circle cx='2' cy='2' r='1' fill='currentColor' className='text-gray-200' />
					</pattern>
					<rect x='0' y='0' width='100' height='100' fill='url(#pattern)' />
				</svg>
			</div>

			{/* Vertical divider */}
			<div className='w-px bg-gray-200' />

			{/* Right side - Form */}
			<div className='w-1/2 p-20'>
				<form onSubmit={handleSubmit} className='h-full flex flex-col justify-center gap-2 w-3/5'>
					<FormTitle>Bienvenido</FormTitle>
					<FormInput type='email' label='EMAIL' id='username' />
					<FormInput type='password' label='CONTRASEÑA' id='password' />
					{/* <input
								id='username'
								type='text'
								value={formData.username}
								onChange={(e) => setFormData({ ...formData, username: e.target.value })}
							/> */}
					<div className='text-right my-5 self-end'>
						<a href='#' className='text-xs text-gray-400 hover:text-gray-600'>
							¿Olvidaste tu contraseña?
						</a>
					</div>
					<BigButton className='mx-auto' size='large' type='submit' uppercase>
						Iniciar Sesión
					</BigButton>
				</form>
				<p className="uppercase">Aun no tengo cuenta <span><a className="text-blue-500" href="">registrarse</a></span></p>
			</div>
		</div>
	)
}

export default Login
