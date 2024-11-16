import { Route, Routes } from "react-router-dom"
import { Home, Login } from "@/pages"
import { Welcome } from "@/features/presentations"
import { welcomeContent } from "./features/data"
import Error404 from "./pages/Error404"

const App = () => {
	return (
		<div className='text-foreground'>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/home' element={<Home />}>
					{welcomeContent.map((content, index) => (
						<Route
							key={index}
							path={content.route}
							element={<Welcome title={content.title} text={content.text} />}
						/>
					))}
				</Route>
				<Route path='*' element={<Error404 />} />
			</Routes>
		</div>
	)
}

export default App
