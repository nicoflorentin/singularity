import { OurServicesCard, ZipCodeSection } from "@/features/presentations"
import relax from "@/assets/relax.png"
import veterinarian from "@/assets/veterinarian.png"
import calendar from "@/assets/calendar.png"
import { CardData, ZipCodeSectionData } from "@/types/interfaces"
import path from "@/assets/path.webp"

const zipCodeSectionData: ZipCodeSectionData = {
	subtitle: "How it Works",
	content1: (
		<>
			Because finding a good pet sitter shouldn't be <br /> a hassle. With Fetch! It's as easy as...
		</>
	),
	content2: <>Enter Your Location and Fetch Our Services</>,
}

const cardsData: CardData[] = [
	{
		label: "Reserve",
		imageURL: calendar,
		key: 1,
	},
	{
		label: "Match",
		imageURL: veterinarian,
		key: 2,
	},
	{
		label: "Relax",
		imageURL: relax,
		key: 3,
	},
]

const HowItWorks = () => {
	return (
		<section className=' relative h-[90vh] flex justify-center gap-32 '>
			<img className='absolute w-full' src='' alt='' />
			<div className='relative flex flex-col gap-1 min-w-[700px]'>
				<img className = "z-0 absolute h-[90%] w-[1000px]" src={path} alt="path" />
				<div className="z-0 absolute h-[1600px] w-[1600px] bg-yellow-300 border rounded-full left-[50vw] -translate-y-[50vh]"></div>
				<div className="z-0 absolute h-[400px] w-[400px] bg-yellow-300 border rounded-full -left-[20vw] translate-y-[50vh]"></div>
				{cardsData.map((card, index) => (
					<div className={index === 1 ? "flex justify-end" : ""}>
						<OurServicesCard key={card.key} label={card.label} imageURL={card.imageURL} />
					</div>
				))}
			</div>
			<ZipCodeSection {...zipCodeSectionData} />
		</section>
	)
}

export default HowItWorks
