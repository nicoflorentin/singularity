import { ArrowInput } from "@/components/input"
import { SubTitle, Text } from "@/components/text"
import React from "react"

interface ZipCodeSectionProps {
	subtitle: string
	content1: React.ReactNode
	content2: React.ReactNode
}

const ZipCodeSection = ({ subtitle, content1, content2 }: ZipCodeSectionProps) => {
	return (
		<div className='relative flex flex-col gap-10 w-[500px] '>
			<SubTitle className='text-primary'>
				{/* Our Services  */}
				{subtitle}
			</SubTitle>
			<Text className='text-onBackground' size='medium'>
				{/* National Brand With a Local Feel. <br /> Experience The Fetch! Difference */}
				{content1}
			</Text>
			<Text className='font-extrabold text-primary' size='medium'>
				{/* Enter Your Location and Fetch Our Services */}
				{content2}
			</Text>
			<ArrowInput />
		</div>
	)
}

export default ZipCodeSection
