import { MdExplore } from 'react-icons/md'
import { BiSolidStar } from 'react-icons/bi'
import { BsMessenger } from 'react-icons/bs'
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2'
import { HiMiniGlobeAsiaAustralia } from 'react-icons/hi2'
import { TbDialpad } from 'react-icons/tb'
import { IoAddCircleSharp } from 'react-icons/io5'
import Image from 'next/image'

const navItems = [
	{
		itemTitle: 'Explore',
		notifaction: false,
		icon: <MdExplore className="w-6 h-6 text-[#C3CAD9] hover:text-[#3361FF]" />
	},
	{
		itemTitle: 'Starred',
		notifaction: false,
		icon: <BiSolidStar className="w-6 h-6 text-[#C3CAD9] hover:text-[#3361FF]" />
	},
	{
		itemTitle: 'Messenger',
		notifaction: true,
		icon: <BsMessenger className="w-6 h-6 text-[#C3CAD9] hover:text-[#3361FF]" />
	},
	{
		itemTitle: 'Activity',
		notifaction: false,
		icon: <HiOutlineArrowTrendingUp className="w-6 h-6 text-[#C3CAD9] hover:text-[#3361FF]" />
	},
	{
		itemTitle: 'News',
		notifaction: false,
		icon: <HiMiniGlobeAsiaAustralia className="w-6 h-6 text-[#C3CAD9] hover:text-[#3361FF]" />
	},
	{
		itemTitle: 'Stack',
		notifaction: false,
		icon: <TbDialpad className="w-6 h-6 text-[#C3CAD9] rotate-180 hover:text-[#3361FF]" />
	}
]

const teamMemberList = [
	{
		Name: 'Avatar 4',
		ImgUrl: '/Avatar4.png',
		ImgTitle: 'Avatar 4 Image',
		ImgbgClr: 'bg-[#FF6633]/30',
		notification: true
	},
	{
		Name: 'Avatar 3',
		ImgUrl: '/Avatar3.png',
		ImgTitle: 'Avatar 3 Image',
		ImgbgClr: 'bg-[#E62E7B]/40',
		notification: false
	},
	{
		Name: 'Avatar 2',
		ImgUrl: '/Avatar2.png',
		ImgTitle: 'Avatar 2 Image',
		ImgbgClr: 'bg-[#8833FF]/30',
		notification: false
	},
	{
		Name: 'Avatar 1',
		ImgUrl: '/Avatar1.png',
		ImgTitle: 'Avatar 1 Image',
		ImgbgClr: 'bg-[#FFCB33]',
		notification: false
	}
]

export default function SideNav(props: { isSideNavVisble: boolean }) {
	return (
		<>
			{props.isSideNavVisble && (
				<div className="w-[90px] h-[calc(100vh-80px)] z-10 lg:z-10 absolute lg:static bg-[#F7F8FA] overflow-y-scroll scrollbar-hide border-r border-gray-200 flex flex-col justify-between items-center gap-6 py-8">
					<div className="flex flex-col items-center gap-3">
						{navItems.map((item, index) => (
							<button
								type="button"
								key={`Nav-Item-${index}-${item.itemTitle}`}
								title={item.itemTitle}
								className="relative bg-white p-3 rounded-full  shadow-md shadow-gray-100"
							>
								{item.notifaction && (
									<div className="w-[10px] h-[10px] absolute right-0 top-0.5 rounded-full bg-[#3361FF]"></div>
								)}
								{item.icon}
							</button>
						))}
					</div>
					<div className="flex flex-col items-center gap-3">
						{teamMemberList.map((member, index) => (
							<button
								type="button"
								title={member.Name}
								key={`Nav-Item-${index}-${member.Name}`}
								className={`relative w-[50px] h-[50px] rounded-full hover:scale-90 ${member.ImgbgClr}`}
							>
								{member.notification && (
									<div className="w-[10px] h-[10px] absolute right-0 top-0.5 rounded-full bg-[#3361FF]"></div>
								)}
								<Image
									src={member.ImgUrl}
									alt={member.ImgTitle}
									width={50}
									height={50}
									loading="eager"
									className="rounded-full"
									priority
								/>
							</button>
						))}

						<button
							type="button"
							title="Add member"
							className="bg-white p-3 rounded-full  shadow-md shadow-gray-100"
						>
							<IoAddCircleSharp className="w-6 h-6 rotate-180 text-[#C3CAD9] hover:text-[#656e80]" />
						</button>
					</div>
				</div>
			)}
		</>
	)
}
