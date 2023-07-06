import Image from 'next/image'
import { BsListUl } from 'react-icons/bs'
import { MdAttachFile, MdAlarm } from 'react-icons/md'

export default function Task(props: {
	title: string
	list: number
	attachments: number
	deadline: string
	taskImg: string
	contributors: {
		imgUrl: string
		bgColor: string
	}[]
}) {
	return (
		<div className="w-full bg-white rounded-md">
			{props.taskImg !== '' && (
				<Image
					src={props.taskImg}
					alt={'Task Image'}
					width={230}
					height={170}
					className="w-full"
					loading="eager"
					priority
				/>
			)}
			<div className="w-full flex justify-between items-center pt-4 px-4">
				<span className="text-[12px] text-[#ADB8CC] font-bold">Sapce Task 2</span>
				<div className="flex mr-2">
					{props.contributors.map((item, index) => (
						<div
							key={`contibutor-${index}`}
							className={`w-[20px] h-[20px] -mr-1.5 bg-[#8833FF]/30 rounded-full overflow-clip ${item.bgColor}`}
						>
							<Image
								src={item.imgUrl}
								alt="Avatar 2 Image"
								width={20}
								height={20}
								loading="eager"
								priority
							/>
						</div>
					))}
				</div>
			</div>
			<span className="block text-[12px] text-left text-[#6B7A99] font-bold mt-1 pb-4 px-4">
				{props.title}
			</span>
			{props.list != 0 && (
				<div className="w-full px-4 pb-4 flex items-center gap-3">
					<div className="flex items-center gap-2">
						<button type="button">
							<BsListUl className="w-5 h-5 text-[#C3CAD9] hover:text-[#656e80]" />
						</button>
						<span className="text-[12px] text-[#6B7A99] font-bold">{props.list}</span>
					</div>
					<div className="flex items-center gap-3">
						<button type="button">
							<MdAttachFile className="w-6 h-6 rotate-90 text-[#C3CAD9] hover:text-[#656e80]" />
						</button>
						<span className="text-[12px] text-[#6B7A99] font-bold">
							{props.attachments}
						</span>
					</div>
					<div className="flex items-center gap-3">
						<button type="button">
							<MdAlarm className="w-6 h-6 text-[#C3CAD9] hover:text-[#656e80]" />
						</button>
						<span className="text-[12px] text-[#6B7A99] font-bold">
							{props.deadline}
						</span>
					</div>
				</div>
			)}
		</div>
	)
}
