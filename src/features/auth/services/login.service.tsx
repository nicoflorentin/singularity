import { LoginData } from "@/types/login"
import axios from "axios"

export const login = async (userLogin: LoginData) => {
	console.log("login", userLogin)
	const { data, status } = await axios.post("https://reqres.in/api/login", {
		email: userLogin.username,
		password: userLogin.password,
	})

	if (status !== 200) {
		throw new Error("Login failed")
	}
	return data
}
