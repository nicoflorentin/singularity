import { BigButton } from "@/components/button"
import { Text, Title } from "@/components/text"

interface Welcome {
	title: string
	text: string
}

const Welcome = ({ title, text }: Welcome) => {
	return (
		<div className='flex flex-col gap-8 text-onPrimary w-[700px]'>
			<Title>{title}</Title>
			<Text className='w-[550px]' size='medium'>
				{/* For over 17 years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy! */}
				{text}
			</Text>
			<div className='flex gap-8 items-center'>
				<BigButton size='medium' type='submit'>
					Schedule a Service
				</BigButton>
				<Text size='small'>Or Call 866.338.2463</Text>
			</div>
		</div>
	)
}

export default Welcome
