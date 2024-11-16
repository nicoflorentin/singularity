import owner from "@/assets/owner.webp"
import { Text } from "@/components/text"

const OwnerCard = () => {
	return (
		<div className='flex flex-col items-center gap-7 p-8 bg-secondary w-[600px] rounded-3xl text-onSecondary'>
			<img className='h-28' src={owner} alt='' />
			<Text size="big">Kenned Dsouza</Text>
			<Text size="medium" className="text-center">
				"I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate
				the daily communication I get about the dog and how my dog is doing"
			</Text>
		</div>
	)
}

export default OwnerCard
