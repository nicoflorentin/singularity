import { OurServicesCard, ZipCodeSection } from "@/features/presentations"

const zipSectionData = {
	subtitle: "How it Works",
	content1: (
		<>
			{/* tambien se puede usar /n y hacer la lógica de saltos de linea en la parte del renderizado */}
			{/* dejando los datos como string en su totalidad */}
			Because finding a good pet sitter shouldn't be <br /> a hassle. With Fetch! It's as easy as...
		</>
	),
	content2: <>Enter Your Location and Fetch Our Services</>,
}

const cardsData = [
	{
		label: "Dog Walking",
		imageURL: "https://via.placeholder.com/250x250",
		key: 1,
	},
	{
		label: "Pet Sitting",
		imageURL: "https://via.placeholder.com/250x250",
		key: 2,
	},
	{
		label: "Overnight Care",
		imageURL: "https://via.placeholder.com/250x250",
	},
	
]

const HowItWorks = () => {
	return (
		<div className='relative h-[90vh] flex justify-around items-center'>
			<img className='absolute w-full' src='' alt='' />
			<div className='flex flex-col gap-20'>
				{cardsData.map((card) => (
					<OurServicesCard key={card.key} label={card.label} imageURL={card.imageURL} />
				))}
			</div>
			<ZipCodeSection {...zipSectionData} />
		</div>
	)
}

export default HowItWorks
