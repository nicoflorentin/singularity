import { ArrowInput } from "@/components/input"
import { FooterList } from "@/features/presentations"
import footer from "@/assets/footer.svg"

const Footer = () => {
	const FooterContent = [
		{
			title: "About",
			links: ["Locations", "Franchise With Us", "Partners", "About Us", "Make Fetch Happen"],
		},
		{
			title: "Resources",
			links: ["Reviews", "Pet Resource Center", "Media Fact Sheet", "Blog", "News"],
		},
		{
			title: "",
			links: ["Gift Cards", "Services", "Franchisee Login", "Terms of Use", "Privacy Policy"],
		},
		{
			title: "NewsLetter",
			links: [
				<>
					Sign Up to receive the Fetch! <br /> Family Newsletter{" "}
				</>,
				<ArrowInput placeholder="Email Address"/>,
			],
		},
	]

	return (
		<div className='relative h-[500px] flex justify-around'>
			<img className="z-0 absolute min-w-[1500px] bottom-0" src={footer} alt="" />
			{FooterContent.map((config, index) => (
				<FooterList key={index} title={config.title} links={config.links} />
			))}
		</div>
	)
}

export default Footer
