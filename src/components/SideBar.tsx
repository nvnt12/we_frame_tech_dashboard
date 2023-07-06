import { FaUserLarge } from 'react-icons/fa6'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import Image from 'next/image'
import { MdDashboard, MdEmail, MdChromeReaderMode } from 'react-icons/md'
import { CgPlayListCheck } from 'react-icons/cg'
import { BsCloudFill, BsFillSendFill } from 'react-icons/bs'
import { FaUserGroup } from 'react-icons/fa6'
import { BiCalendarEvent } from 'react-icons/bi'
import { AiFillTool } from 'react-icons/ai'
import { IoLogoWhatsapp, IoMdCall } from 'react-icons/io'

const menuItems = [
	{
		title: 'Dashboard',
		icon: (
			<MdDashboard className="w-[18px] h-[18px] mt-3 text-[#C3CAD9] group-hover:text-[#3361FF]" />
		),
		style: 'border-r border-b border-gray-200 hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0'
	},
	{
		title: 'Notes',
		icon: (
			<CgPlayListCheck className="w-[24px] h-[24px] mt-2 text-[#C3CAD9] group-hover:text-[#3361FF]" />
		),
		style: 'hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0'
	},
	{
		title: 'Tasks',
		icon: (
			<CgPlayListCheck className="w-[24px] h-[24px] mt-2 text-[#C3CAD9] group-hover:text-[#3361FF]" />
		),
		style: 'hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0'
	},
	{
		title: 'Files',
		icon: (
			<BsCloudFill className="w-[20px] h-[20px] mt-2 text-[#C3CAD9] group-hover:text-[#3361FF]" />
		),
		style: ' -ml-px border-l border-t border-b border-gray-200 hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0'
	},
	{
		title: 'Emails',
		icon: (
			<MdEmail className="w-[20px] h-[20px] mt-2 text-[#C3CAD9] group-hover:text-[#3361FF]" />
		),
		style: '-mr-px -mt-px border-t border-r border-b border-gray-200 hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0'
	},
	{
		title: 'Clients',
		icon: (
			<FaUserGroup className="w-[20px] h-[20px] mt-2 text-[#C3CAD9] group-hover:text-[#3361FF]" />
		),
		style: 'hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0'
	},
	{
		title: 'Calendars',
		icon: (
			<BiCalendarEvent className="w-[20px] h-[20px] mt-2 text-[#C3CAD9] group-hover:text-[#3361FF]" />
		),
		style: 'hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0'
	},
	{
		title: 'Settings',
		icon: (
			<AiFillTool className="w-[24px] h-[24px] mt-2 text-[#C3CAD9] group-hover:text-[#3361FF]" />
		),
		style: '-mt-px border-l border-t border-gray-200 hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0'
	}
]

const contacts = [
	{ icon: <IoMdCall className="w-[24px] h-[24px] hover:scale-125 text-[#FF6633]" /> },
	{ icon: <MdEmail className="w-[24px] h-[24px] hover:scale-125 text-[#29CC39]" /> },
	{ icon: <MdChromeReaderMode className="w-[22px] h-[22px] hover:scale-125 text-[#8833FF]" /> },
	{ icon: <BsFillSendFill className="w-[18px] h-[18px] hover:scale-125 text-[#33BFFF]" /> },
	{ icon: <IoLogoWhatsapp className="w-[22px] h-[22px] hover:scale-125 text-[#29CC39]" /> }
]

export default function SideBar() {
	return (
		<div className="w-[340px] pl-12 pr-10 py-8 hidden 2xl:flex 2xl:flex-col 2xl:items-center">
			<div className="w-full flex justify-between">
				<button
					type="button"
					className="bg-white p-2 rounded-full  shadow-md shadow-gray-100"
				>
					<FaUserLarge className="w-6 h-4 text-[#C3CAD9] hover:text-[#656e80]" />
				</button>
				<button
					type="button"
					className="bg-white p-2 rounded-full  shadow-md shadow-gray-100"
				>
					<BiDotsHorizontalRounded className="w-6 h-6 text-[#C3CAD9] hover:text-[#656e80]" />
				</button>
			</div>
			<div className="relative flex flex-col justify-center items-center py-9">
				<div className="relative p-2 border-2 border-gray-200 rounded-full">
					<div className="w-[110px] h-[110px] bg-[#FFCB33] rounded-full overflow-clip">
						<Image
							src="/Avatar1.png"
							alt="Avatar 1 Image"
							width={110}
							height={110}
							loading="eager"
							priority
						/>
					</div>
					<div className="py-2 z-10 flex justify-center items-center px-2.5 top-1/2 -mt-3 -right-3 absolute rounded-full bg-[#3361FF]">
						<span className="text-[12px] leading-3 text-white font-bold">2</span>
					</div>
				</div>
				<Image
					src="/Line.svg"
					alt="Avatar 1 Image"
					width={128}
					height={128}
					loading="eager"
					className="absolute top-9"
					priority
				/>
				<span className="text-[#6B7A99] text-base font-bold mt-6">Hello Alfred Bryant</span>
				<span className="text-[#ADB8CC] text-sm font-bold mt-4">
					adrain.nader@yahoo.com
				</span>
			</div>
			<div className="w-60 h-[480px] grid grid-cols-2 rounded-xl border border-gray-200 mt-5">
				{menuItems.map((item, index) => (
					<div className="flex" key={`Menu-Item-${index}-${item.title}`}>
						<div
							className={`" w-[120px] h-[120px] group flex flex-col gap-6 justify-center items-center hover:shadow-lg hover:shadow-gray-200 ${item.style}`}
						>
							{item.icon}
							<span className="text-[12px] text-[#ADB8CC] group-hover:text-[#3361FF] font-bold">
								{item.title}
							</span>
						</div>
					</div>
				))}
			</div>
			<div className="w-60 h-16 rounded-full border border-gray-200 mt-32 flex justify-between items-center py-4 px-8">
				{contacts.map((item, index) => (
					<div key={`Contact-item-${index}`}>{item.icon}</div>
				))}
			</div>
		</div>
	)
}
