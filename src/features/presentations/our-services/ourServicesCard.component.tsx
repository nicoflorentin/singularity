import { Text } from "@/components/text"

interface OurServicesCardProps {
	label: string
	imageURL: string
}

const OurServicesCard = ({ label, imageURL }: OurServicesCardProps) => {
	return (
		<div className='relative flex flex-col gap-10 items-center justify-center w-[40%] min-w-[160px] aspect-square rounded-3xl shadow-surface bg-surface'>
			<img className="h-20 opacity-30" src={imageURL} alt='' />
			<Text className="text-onSurface" size="medium">{label}</Text>
		</div>
	)
}

export default OurServicesCard
