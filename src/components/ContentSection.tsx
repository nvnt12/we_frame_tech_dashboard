import { CgPlayListCheck } from 'react-icons/cg'
import { MdDashboard } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { BiMenuAltLeft, BiCalendarEvent } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2'
import TaskHeader from './TaskHeader'
import Task from './Task'
import NewTask from './NewTask'
import { useState } from 'react'
import EmptySection from './EmptySection'

const todoList = [
	{
		title: 'Make Money Online Through',
		taskImg: '/TodoImage.png',
		list: 4,
		attachments: 2,
		deadline: '6 days left',
		contributors: [
			{
				imgUrl: '/Avatar1.png',
				bgColor: 'bg-[#8833FF]'
			}
		]
	},
	{
		title: 'Make Money Online Through',
		taskImg: '',
		list: 0,
		attachments: 0,
		deadline: '',
		contributors: [
			{
				imgUrl: '/Avatar2.png',
				bgColor: 'bg-[#8833FF]'
			},
			{
				imgUrl: '/Avatar1.png',
				bgColor: 'bg-[#8833FF]'
			}
		]
	},
	{
		title: 'Search Engine Optimization...',
		taskImg: '',
		list: 0,
		attachments: 0,
		deadline: '',
		contributors: [
			{
				imgUrl: '/Avatar3.png',
				bgColor: 'bg-[#8833FF]'
			},
			{
				imgUrl: '/Avatar1.png',
				bgColor: 'bg-[#8833FF]'
			},
			{
				imgUrl: '/Avatar2.png',
				bgColor: 'bg-[#8833FF]'
			}
		]
	},
	{
		title: 'Characteristics Of A Successful',
		taskImg: '',
		list: 0,
		attachments: 0,
		deadline: '',
		contributors: [
			{
				imgUrl: '/Avatar2.png',
				bgColor: 'bg-[#8833FF]'
			}
		]
	},
	{
		title: 'Getting Free Publicity',
		taskImg: '',
		list: 0,
		attachments: 0,
		deadline: '',
		contributors: [
			{
				imgUrl: '/Avatar4.png',
				bgColor: 'bg-[#8833FF]'
			}
		]
	},
	{
		title: 'Importance Of The Custom..',
		taskImg: '',
		list: 0,
		attachments: 0,
		deadline: '',
		contributors: [
			{
				imgUrl: '/Avatar3.png',
				bgColor: 'bg-[#8833FF]'
			}
		]
	}
]

const inWork = [
	{
		title: 'Types of Paper In Catalog',
		taskImg: '',
		list: 0,
		attachments: 0,
		deadline: '',
		contributors: [
			{
				imgUrl: '/Avatar3.png',
				bgColor: 'bg-[#8833FF]'
			}
		]
	},
	{
		title: 'Global Resorts Network',
		taskImg: '/InWorkImage.png',
		list: 4,
		attachments: 2,
		deadline: '6 days left',
		contributors: [
			{
				imgUrl: '/Avatar2.png',
				bgColor: 'bg-[#8833FF]'
			}
		]
	},
	{
		title: 'Development Apps',
		taskImg: '',
		list: 0,
		attachments: 0,
		deadline: '',
		contributors: [
			{
				imgUrl: '/Avatar1.png',
				bgColor: 'bg-[#8833FF]'
			}
		]
	},
	{
		title: 'Copper Canyon',
		taskImg: '',
		list: 5,
		attachments: 2,
		deadline: '1 day left',
		contributors: [
			{
				imgUrl: '/Avatar4.png',
				bgColor: 'bg-[#8833FF]'
			}
		]
	}
]

const inReview = [
	{
		title: 'Astronomy Or Astrology',
		taskImg: '',
		list: 0,
		attachments: 0,
		deadline: '',
		contributors: [
			{
				imgUrl: '/Avatar2.png',
				bgColor: 'bg-[#8833FF]'
			}
		]
	},
	{
		title: 'Astronomy Binoculars A Great',
		taskImg: '',
		list: 0,
		attachments: 0,
		deadline: '',
		contributors: [
			{
				imgUrl: '/Avatar4.png',
				bgColor: 'bg-[#8833FF]'
			}
		]
	}
]

const done = [
	{
		title: 'Copper Canyon',
		taskImg: '',
		list: 0,
		attachments: 0,
		deadline: '',
		contributors: [
			{
				imgUrl: '/Avatar3.png',
				bgColor: 'bg-[#8833FF]'
			}
		]
	}
]
export default function ContentSection() {
	const [isNotesVisible, setIsNotesVisible] = useState(false)
	const [isBoardsVisible, setIsBoardsVisible] = useState(true)
	const [isGanttVisible, setIsGanttVisible] = useState(false)
	const [isCalendarVisible, setIsCalendarVisible] = useState(false)
	const [isTimelineVisible, setIsTimelineVisible] = useState(false)
	const [isActivityVisible, setIsActivityVisible] = useState(false)
	const [isSelected, setIsSelected] = useState(`Boards`)

	const menuItems = [
		{
			title: 'Notes',
			icon: (
				<CgPlayListCheck
					className={`w-[24px] h-[24px] group-hover:text-[#768ab1] ${
						isNotesVisible ? 'text-[#3361FF]' : 'text-[#C3CAD9]'
					}`}
				/>
			)
		},
		{
			title: 'Boards',
			icon: (
				<MdDashboard
					className={`w-[20px] h-[20px] group-hover:text-[#768ab1] ${
						isBoardsVisible ? 'text-[#3361FF]' : 'text-[#C3CAD9]'
					}`}
				/>
			)
		},
		{
			title: 'Gantt',
			icon: (
				<BiMenuAltLeft
					className={`w-[24px] h-[24px] group-hover:text-[#768ab1] ${
						isGanttVisible ? 'text-[#3361FF]' : 'text-[#C3CAD9]'
					}`}
				/>
			)
		},
		{
			title: 'Calendar',
			icon: (
				<BiCalendarEvent
					className={`w-[24px] h-[24px] group-hover:text-[#768ab1] ${
						isCalendarVisible ? 'text-[#3361FF]' : 'text-[#C3CAD9]'
					}`}
				/>
			)
		},
		{
			title: 'Timeline',
			icon: (
				<FiMenu
					className={`w-[20px] h-[20px] group-hover:text-[#768ab1] ${
						isTimelineVisible ? 'text-[#3361FF]' : 'text-[#C3CAD9]'
					}`}
				/>
			)
		},
		{
			title: 'Activity',
			icon: (
				<HiOutlineArrowTrendingUp
					className={`w-[20px] h-[20px] group-hover:text-[#768ab1] ${
						isActivityVisible ? 'text-[#3361FF]' : 'text-[#C3CAD9]'
					}`}
				/>
			)
		}
	]

	return (
		<div className="w-full h-fit p-6">
			<div className="w-full xl:w-fit h-full border border-gray-200 rounded-xl overflow-hidden">
				<div className="w-full flex h-20 border-b border-gray-200 px-8 justify-between gap-2 xl:gap-24">
					<div className="w-fit h-full flex items-center gap-2">
						<button
							type="button"
							onClick={() => {
								document.getElementById('snap-container')?.scrollBy({
									left: -120
								})
							}}
							className="lg:hidden bg-white rounded-full h-10 w-10 lg:w-fit shadow-md shadow-gray-100 flex justify-center items-center lg:px-6"
						>
							<LiaAngleLeftSolid className="h-4 w-4 text-[#C3CAD9] hover:text-[#768ab1]" />
						</button>
						<div
							id="snap-container"
							className="w-[120px] lg:w-fit h-full flex gap-2 snap-x snap-mandatory overflow-x-scroll scrollbar-hide"
						>
							{menuItems.map((item, index) => (
								<button
									type="button"
									onClick={() => {
										setIsSelected(item.title)
										if (item.title === 'Notes') {
											setIsNotesVisible(true)
											setIsBoardsVisible(false)
											setIsGanttVisible(false)
											setIsCalendarVisible(false)
											setIsTimelineVisible(false)
											setIsActivityVisible(false)
										}
										if (item.title === 'Boards') {
											setIsNotesVisible(false)
											setIsBoardsVisible(true)
											setIsGanttVisible(false)
											setIsCalendarVisible(false)
											setIsTimelineVisible(false)
											setIsActivityVisible(false)
										}
										if (item.title === 'Gantt') {
											setIsNotesVisible(false)
											setIsBoardsVisible(false)
											setIsGanttVisible(true)
											setIsCalendarVisible(false)
											setIsTimelineVisible(false)
											setIsActivityVisible(false)
										}
										if (item.title === 'Calendar') {
											setIsNotesVisible(false)
											setIsBoardsVisible(false)
											setIsGanttVisible(false)
											setIsCalendarVisible(true)
											setIsTimelineVisible(false)
											setIsActivityVisible(false)
										}
										if (item.title === 'Timeline') {
											setIsNotesVisible(false)
											setIsBoardsVisible(false)
											setIsGanttVisible(false)
											setIsCalendarVisible(false)
											setIsTimelineVisible(true)
											setIsActivityVisible(false)
										}
										if (item.title === 'Activity') {
											setIsNotesVisible(false)
											setIsBoardsVisible(false)
											setIsGanttVisible(false)
											setIsCalendarVisible(false)
											setIsTimelineVisible(false)
											setIsActivityVisible(true)
										}
									}}
									key={`Menu-Item-${index}-${item.title}`}
									className={`w-full h-full group flex px-5 gap-4 justify-center items-center snap-center ${
										isSelected === item.title
											? 'border-b-[3px] border-[#3361FF]'
											: ''
									}`}
								>
									{item.icon}
									<span
										className={`text-[12px] group-hover:text-[#768ab1] font-bold ${
											isSelected === item.title
												? 'text-[#3361FF]'
												: 'text-[#ADB8CC]'
										}`}
									>
										{item.title}
									</span>
								</button>
							))}
						</div>
						<button
							type="button"
							onClick={() => {
								document.getElementById('snap-container')?.scrollBy({
									left: 120
								})
							}}
							className="lg:hidden bg-white rounded-full h-10 w-10 lg:w-fit shadow-md shadow-gray-100 flex justify-center items-center lg:px-6"
						>
							<LiaAngleLeftSolid className="h-4 w-4 rotate-180 text-[#C3CAD9] hover:text-[#768ab1]" />
						</button>
					</div>
					<div className="h-full flex items-center">
						<div className=" bg-white rounded-full h-10 w-10 xl:w-fit shadow-md shadow-gray-100 flex justify-between items-center xl:px-6">
							<div className="w-full flex justify-center items-center gap-2">
								<AiOutlineSearch className="h-5 w-5 text-[#C3CAD9]" />
								<input
									type="text"
									placeholder="Search Tasks"
									className="w-full hidden xl:block text-[#768ab1] font-bold placeholder:text-[12px] -mt-[2px] lg:-mt-0 placeholder:text-[#7D8FB3] placeholder:font-bold focus:outline-none"
								/>
							</div>
						</div>
					</div>
				</div>
				{isBoardsVisible ? (
					<div className="overflow-x-scroll xl:scrollbar-hide">
						<div className="p-14 min-w-[1110px] grid grid-cols-4 gap-7">
							<div className="min-w-[230px] w-[230px] flex flex-col gap-3">
								<TaskHeader title={'To do'} count={5} color={'bg-[#8833FF]'} />
								{todoList.map((item, index) => (
									<div
										key={`Todo-Task-${index}`}
										className="hover:border hover:border-[#E62E2E] hover:rounded-md"
									>
										<Task
											title={item.title}
											taskImg={item.taskImg}
											list={item.list}
											attachments={item.attachments}
											deadline={item.deadline}
											contributors={item.contributors}
										/>
									</div>
								))}
								<NewTask />
							</div>
							<div className="min-w-[230px] w-[230px] flex flex-col gap-3">
								<TaskHeader title={'In work'} count={4} color={'bg-[#33BFFF]'} />
								{inWork.map((item, index) => (
									<div
										key={`InWork-Task-${index}`}
										className="hover:border hover:border-[#E62E2E] hover:rounded-md"
									>
										<Task
											title={item.title}
											taskImg={item.taskImg}
											list={item.list}
											attachments={item.attachments}
											deadline={item.deadline}
											contributors={item.contributors}
										/>
									</div>
								))}
								<NewTask />
							</div>
							<div className="min-w-[230px] w-[230px] flex flex-col gap-3">
								<TaskHeader title={'Review'} count={2} color={'bg-[#FFCB33]'} />
								{inReview.map((item, index) => (
									<div
										key={`InReview-Task-${index}`}
										className="hover:border hover:border-[#E62E2E] hover:rounded-md"
									>
										<Task
											title={item.title}
											taskImg={item.taskImg}
											list={item.list}
											attachments={item.attachments}
											deadline={item.deadline}
											contributors={item.contributors}
										/>
									</div>
								))}
								<NewTask />
							</div>
							<div className="min-w-[230px] w-[230px] flex flex-col gap-3">
								<TaskHeader title={'Done'} count={1} color={'bg-[#29CC39]'} />
								{done.map((item, index) => (
									<div
										key={`Done-Task-${index}`}
										className="hover:border hover:border-[#E62E2E] hover:rounded-md"
									>
										<Task
											title={item.title}
											taskImg={item.taskImg}
											list={item.list}
											attachments={item.attachments}
											deadline={item.deadline}
											contributors={item.contributors}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				) : (
					<EmptySection />
				)}
			</div>
		</div>
	)
}
