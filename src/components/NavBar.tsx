import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { BiSolidBell } from 'react-icons/bi'
import { MdCancel } from 'react-icons/md'
import { HiMiniUserCircle } from 'react-icons/hi2'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaAngleRight } from 'react-icons/fa6'
import { useState } from 'react'

const navItems = ['Dashboard', 'About Us', 'News', 'User Policy', 'Contacts']

export default function NavBar(props: { onMenuButtonClick: () => void }) {
	const [isUserAccInfoVisible, setIsUserAccInfoVisible] = useState(false)

	return (
		<div className="w-full h-20 border-b bg-[#F7F8FA] border-gray-200 flex items-center px-5 sticky top-0 z-20">
			<div className="w-full h-full flex justify-between items-center">
				<div className="flex items-center gap-4 sm:gap-8">
					<button
						type="button"
						onClick={() => {
							props.onMenuButtonClick()
						}}
						className="bg-white p-3 rounded-full  shadow-md shadow-gray-100"
					>
						<FiMenu className="w-6 h-6 text-[#C3CAD9] hover:text-[#656e80]" />
					</button>
					<div>
						<span className="text-[#4D5E80] text-lg font-bold mr-2 sm:mr-0">
							Constructor
						</span>
					</div>
				</div>
				<div className="hidden lg:flex lg:items-center lg:gap-6 lg:mt-1">
					<nav className="flex items-center gap-6">
						{navItems.map((item, index) => (
							<Link
								href={''}
								key={`Nav-Item-${index}-${item}`}
								className="text-[#7D8FB3] hover:text-[#536281] text-[13px] font-bold"
							>
								{item}
							</Link>
						))}
					</nav>
					<button type="button">
						<BiDotsHorizontalRounded className="text-[#C3CAD9] hover:text-[#536281] w-7 h-7" />
					</button>
				</div>
				<div className="hidden bg-white rounded-full h-12 w-[430px] shadow-md shadow-gray-100 2xl:flex 2xl:justify-between px-6">
					<div className="w-full flex items-center gap-3">
						<AiOutlineSearch className="h-6 w-6 text-[#C3CAD9]" />
						<input
							type="text"
							placeholder="Search Products, Orders and Clients"
							className="w-full text-[#899cc0] placeholder:text-[#ADB8CC] focus:outline-none"
						/>
					</div>
					<button type="button" className="flex items-center">
						<FaAngleRight className="h-4 w-4 font-light hover:text-[#536281] text-[#C3CAD9]" />
					</button>
				</div>
				<div className="flex items-center gap-3">
					<div className="flex items-center gap-6">
						{!isUserAccInfoVisible && (
							<button
								type="button"
								onClick={() => {
									setIsUserAccInfoVisible(true)
								}}
								className="bg-white p-3 rounded-full shadow-md shadow-gray-100"
							>
								<HiMiniUserCircle className="w-6 h-6 text-[#C3CAD9] hover:text-[#656e80]" />
							</button>
						)}
						{isUserAccInfoVisible && (
							<>
								<div className="hidden md:flex md:items-center md:gap-5">
									<HiMiniUserCircle className="w-7 h-7 text-[#C3CAD9]" />
									<span className="text-[#6B7A99] text-[13px] font-bold">
										Clayton Santos
									</span>
								</div>
								<button
									type="button"
									className="relative block bg-white p-3 rounded-full shadow-md shadow-gray-100"
								>
									<div className="w-[10px] h-[10px] absolute right-0 top-0.5 rounded-full bg-[#E62E7B]"></div>
									<BiSolidBell className="w-6 h-6 text-[#C3CAD9] hover:text-[#656e80]" />
								</button>
							</>
						)}
					</div>
					{isUserAccInfoVisible && (
						<button
							type="button"
							onClick={() => {
								setIsUserAccInfoVisible(false)
							}}
							className="bg-white block p-3 rounded-full  shadow-md shadow-gray-100"
						>
							<MdCancel className="w-6 h-6 text-[#C3CAD9] hover:text-[#656e80]" />
						</button>
					)}
				</div>
			</div>
		</div>
	)
}
