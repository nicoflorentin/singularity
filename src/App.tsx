import { Route, Routes } from "react-router-dom"
import { Home, Login } from "@/pages"

const App = () => {
	return (
			<div className='text-foreground'>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/home' element={<Home />} />
				</Routes>
			</div>
	)
}

export default App
