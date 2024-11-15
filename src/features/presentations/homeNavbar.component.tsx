import logo from "@/assets/dog-cat.svg"
import { Navlink } from "@/components/link"

const NavBar = () => {
	return (
		<nav className='text-onPrimary flex items-center h-24 px-28 py-14'>
			<img className='h-20' src={logo} alt='' />
			<ul className='flex gap-10 ml-auto'>
				<Navlink navigateTo='/location'>Location</Navlink>
				<Navlink navigateTo='/blog'>Blog</Navlink>
				<Navlink navigateTo='/services'>Services</Navlink>
				<Navlink navigateTo='/about'>About Us</Navlink>
				<Navlink navigateTo='/franchise'>Franchise with Us</Navlink>
			</ul>
		</nav>
	)
}

export default NavBar
