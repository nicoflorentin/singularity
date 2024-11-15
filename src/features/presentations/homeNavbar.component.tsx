import logo from "@/assets/dog-cat.svg"

const NavBar = () => {
	return (
		<nav className='flex border items-center h-24 px-28 py-16'>
			<img className='h-20' src={logo} alt='' />
			<ul className='flex gap-10 ml-auto'>
				<li>Location</li>
				<li>Blog</li>
				<li>Services</li>
				<li>About Us</li>
				<li>Franchise with Us</li>
			</ul>
		</nav>
	)
}

export default NavBar
