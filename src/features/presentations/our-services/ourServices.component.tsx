import azul from "@/assets/azulvect.svg"
import { OurServicesCard, ZipCodeSection } from "@/features/presentations"
import petHouse from "@/assets/pet-house.png"
import dogWalk from "@/assets/dog-walk.png"
import footPrint from "@/assets/foot-print.png"
import catSit from "@/assets/cat-sit.png"

const cardsData = [
	{
		label: "Dog Walking",
		imageURL: dogWalk,
		key: 1,
	},
	{
		label: "Pet Sitting",
		imageURL: catSit,
		key: 2,
	},
	{
		label: "Overnight Care",
		imageURL: petHouse,
	},
	{
		label: "Other Services",
		imageURL: footPrint,
	},
]

const zipSectionData = {
	subtitle: "Our Services",
	content1: (
		<>
			National Brand With a Local Feel. <br /> Experience The Fetch! Difference
		</>
	),
	content2: <>Enter Your Location and Fetch Our Services</>,
}

const OurServices = () => {
	return (
		<section className='h-[90vh] flex justify-around'>
			<img className='absolute -translate-y-[100px] w-[1900px] min-w-[1300px]' src={azul} alt='' />
			<div className='relative z-10 flex flex-col justify-center h-full'>
				<ZipCodeSection
					subtitle='Our Services'
					content1={zipSectionData.content1}
					content2={zipSectionData.content2}
				/>
			</div>
			<div className='relative flex items-center text-black'>
				<div className='flex flex-wrap max-w-[700px] justify-center gap-9'>
					{cardsData.map((card) => (
						<OurServicesCard key={card.key} label={card.label} imageURL={card.imageURL} />
					))}
				</div>
			</div>
		</section>
	)
}

export default OurServices
