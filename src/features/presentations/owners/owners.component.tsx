import Arrow from "@/components/button/arrow"
import { SubTitle } from "@/components/text"
import { OwnerCard } from "@/features/presentations"

const Owners = () => {
	return (
		<div className='flex flex-col gap-20 mt-44 relative h-[90vh]'>
			<SubTitle className='text-primary text-center leading-normal'>
				Here's what pet owners have to <br /> say about Fetch! Pet Care...
			</SubTitle>
			<div className="flex items-center mx-auto gap-20">
				<Arrow className='rotate-180' />
				<OwnerCard />
				<Arrow />
			</div>
		</div>
	)
}

export default Owners
