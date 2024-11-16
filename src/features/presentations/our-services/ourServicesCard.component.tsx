import { Text } from "@/components/text"

interface OurServicesCardProps {
	label: string
	imageURL: string
}

const OurServicesCard = ({ label, imageURL }: OurServicesCardProps) => {
	return (
		<div className='flex flex-col gap-10 items-center justify-center w-[250px] h-[250px] border rounded-3xl shadow-surface bg-surface'>
			<img className="h-20 opacity-30" src={imageURL} alt='' />
			<Text className="text-onSurface" size="medium">{label}</Text>
		</div>
	)
}

export default OurServicesCard
