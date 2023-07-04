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

export default function SideBar() {
	return (
		<div className="w-[340px] pl-12 pr-10 py-8 flex flex-col items-center">
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
			<div className="flex flex-col justify-center items-center py-9">
				<div className="p-2 border-2 border-gray-200 rounded-full">
					<div className="w-[110px] h-[110px] bg-[#FFCB33] rounded-full overflow-clip">
						<Image src="/Avatar1.png" alt="Avatar 1 Image" width={110} height={110} />
					</div>
				</div>
				<span className="text-[#6B7A99] text-base font-bold mt-6">Hello Alfred Bryant</span>
				<span className="text-[#ADB8CC] text-sm font-bold mt-4">
					adrain.nader@yahoo.com
				</span>
			</div>
			<div className="w-60 h-[480px] rounded-xl border border-gray-200 mt-5">
				<div className="flex">
					<div className=" w-[120px] h-[120px] flex flex-col gap-6 justify-center items-center border-r border-b border-gray-200 hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0">
						<MdDashboard className="w-[18px] h-[18px] mt-3 text-[#C3CAD9]" />
						<span className="text-[12px] text-[#ADB8CC] font-bold">Dashboard</span>
					</div>
					<div className=" w-[120px] h-[120px] flex flex-col gap-5 justify-center items-center hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0">
						<CgPlayListCheck className="w-[24px] h-[24px] mt-2 text-[#C3CAD9]" />
						<span className="text-[12px] text-[#ADB8CC] font-bold">Notes</span>
					</div>
				</div>
				<div className="flex -mt-px">
					<div className=" w-[120px] h-[120px] flex flex-col gap-6 justify-center items-center hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0">
						<CgPlayListCheck className="w-[24px] h-[24px] mt-2 text-[#C3CAD9]" />
						<span className="text-[12px] text-[#ADB8CC] font-bold">Tasks</span>
					</div>
					<div className=" w-[120px] h-[120px] flex flex-col gap-6 justify-center items-center -ml-px border-l border-t border-b border-gray-200 hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0">
						<BsCloudFill className="w-[20px] h-[20px] mt-2 text-[#C3CAD9]" />
						<span className="text-[12px] text-[#ADB8CC] font-bold">Files</span>
					</div>
				</div>
				<div className="flex">
					<div className=" w-[120px] h-[120px] flex flex-col gap-6 justify-center items-center -mr-px -mt-px border-t border-r border-b border-gray-200 hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0">
						<MdEmail className="w-[20px] h-[20px] mt-2 text-[#C3CAD9]" />
						<span className="text-[12px] text-[#ADB8CC] font-bold">Emails</span>
					</div>
					<div className=" w-[120px] h-[120px] flex flex-col gap-6 justify-center items-center hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0">
						<FaUserGroup className="w-[20px] h-[20px] mt-2 text-[#C3CAD9]" />
						<span className="text-[12px] text-[#ADB8CC] font-bold">Clients</span>
					</div>
				</div>
				<div className="flex -mt-px">
					<div className=" w-[120px] h-[120px] flex flex-col gap-6 justify-center items-center hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0">
						<BiCalendarEvent className="w-[20px] h-[20px] mt-2 text-[#C3CAD9]" />
						<span className="text-[12px] text-[#ADB8CC] font-bold">Calendars</span>
					</div>
					<div className=" w-[120px] h-[120px] flex flex-col gap-6 justify-center items-center -mt-px border-l border-t border-gray-200 hover:bg-white hover:rounded-lg hover:scale-110 hover:border-0">
						<AiFillTool className="w-[24px] h-[24px] mt-2 text-[#C3CAD9]" />
						<span className="text-[12px] text-[#ADB8CC] font-bold">Settings</span>
					</div>
				</div>
			</div>
			<div className="w-60 h-16 rounded-full border border-gray-200 mt-32 flex justify-between items-center px-8">
				<IoMdCall className="w-[24px] h-[24px] hover:scale-110 text-[#FF6633]" />
				<MdEmail className="w-[24px] h-[24px] hover:scale-110 text-[#29CC39]" />
				<MdChromeReaderMode className="w-[22px] h-[22px] hover:scale-110 text-[#8833FF]" />
				<BsFillSendFill className="w-[18px] h-[18px] hover:scale-110 text-[#33BFFF]" />
				<IoLogoWhatsapp className="w-[22px] h-[22px] hover:scale-110 text-[#29CC39]" />
			</div>
		</div>
	)
}
