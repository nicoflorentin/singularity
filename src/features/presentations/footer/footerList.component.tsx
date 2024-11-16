import { SubTitle, Text } from "@/components/text"

type FooterListProps = {
	title: string
	links: string[] | JSX.Element[]
}

const FooterList = ({ title, links }: FooterListProps) => {
	return (
		<div className='z-10 flex flex-col gap-5 mt-28'>
			{title ? <SubTitle className="text-yellow-300" size='small'>{title}</SubTitle> : <br />}
			{links.map((link) => (
				<Text className="text-onPrimary" size='small'>{link}</Text>
			))}
		</div>
	)
}

export default FooterList
