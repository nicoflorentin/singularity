import { LoginData } from "@/types/login"
import {} from "react-toastify"

const validateFields = (user: LoginData, toast: (message: string) => void): { isValid: boolean } => {
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.username)) {
		toast("Usename must be a valid email")
		return { isValid: true }
	}
	if (user.password.length < 10) {
		toast(" Password must contain at least 10 characters")
		return { isValid: false }
	}

	return { isValid: true }
}

export { validateFields }
