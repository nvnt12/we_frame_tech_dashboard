import { MdExplore } from 'react-icons/md'
import { BiSolidStar } from 'react-icons/bi'
import { BsMessenger } from 'react-icons/bs'
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2'
import { HiMiniGlobeAsiaAustralia } from 'react-icons/hi2'
import { TbDialpad } from 'react-icons/tb'
import { IoAddCircleSharp } from 'react-icons/io5'
import Image from 'next/image'

export default function SideNav() {
	return (
		<div className="w-[90px] h-[calc(100vh-80px)] border-r border-gray-200 flex flex-col justify-between items-center gap-6 py-8 px-5">
			<div className="flex flex-col items-center gap-3">
				<button
					type="button"
					className="bg-white p-3 rounded-full  shadow-md shadow-gray-100"
				>
					<MdExplore className="w-6 h-6 text-[#C3CAD9] hover:text-[#3361FF]" />
				</button>
				<button
					type="button"
					className=" bg-white p-3 rounded-full  shadow-md shadow-gray-100"
				>
					<BiSolidStar className="w-6 h-6 text-[#C3CAD9] hover:text-[#3361FF]" />
				</button>
				<button
					type="button"
					className="relative bg-white p-3 rounded-full  shadow-md shadow-gray-100"
				>
					<div className="w-[10px] h-[10px] absolute right-0 top-0.5 rounded-full bg-[#3361FF]"></div>
					<BsMessenger className="w-6 h-6 text-[#C3CAD9] hover:text-[#3361FF]" />
				</button>
				<button
					type="button"
					className="bg-white p-3 rounded-full  shadow-md shadow-gray-100"
				>
					<HiOutlineArrowTrendingUp className="w-6 h-6 text-[#C3CAD9] hover:text-[#3361FF]" />
				</button>
				<button
					type="button"
					className="bg-white p-3 rounded-full  shadow-md shadow-gray-100"
				>
					<HiMiniGlobeAsiaAustralia className="w-6 h-6 text-[#C3CAD9] hover:text-[#3361FF]" />
				</button>
				<button
					type="button"
					className="bg-white p-3 rounded-full  shadow-md shadow-gray-100"
				>
					<TbDialpad className="w-6 h-6 rotate-180 text-[#C3CAD9] hover:text-[#3361FF]" />
				</button>
			</div>
			<div className="flex flex-col items-center gap-3">
				<button
					type="button"
					className="relative w-[50px] h-[50px] bg-[#FF6633]/30 rounded-full"
				>
					<div className="w-[10px] h-[10px] absolute right-0 top-0.5 rounded-full bg-[#3361FF]"></div>
					<Image
						src="/Avatar4.png"
						alt="Avatar 4 Image"
						width={50}
						height={50}
						loading="eager"
						className="rounded-full"
					/>
				</button>
				<button
					type="button"
					className="w-[50px] h-[50px] bg-[#E62E7B]/40 rounded-full overflow-clip"
				>
					<Image
						src="/Avatar3.png"
						alt="Avatar 3 Image"
						width={50}
						height={50}
						loading="eager"
					/>
				</button>
				<button
					type="button"
					className="w-[50px] h-[50px] bg-[#8833FF]/30 rounded-full overflow-clip"
				>
					<Image
						src="/Avatar2.png"
						alt="Avatar 2 Image"
						width={50}
						height={50}
						loading="eager"
					/>
				</button>
				<button
					type="button"
					className="w-[50px] h-[50px] bg-[#FFCB33] rounded-full overflow-clip"
				>
					<Image
						src="/Avatar1.png"
						alt="Avatar 1 Image"
						width={50}
						height={50}
						loading="eager"
					/>
				</button>
				<button
					type="button"
					className="bg-white p-3 rounded-full  shadow-md shadow-gray-100"
				>
					<IoAddCircleSharp className="w-6 h-6 rotate-180 text-[#C3CAD9] hover:text-[#656e80]" />
				</button>
			</div>
		</div>
	)
}
