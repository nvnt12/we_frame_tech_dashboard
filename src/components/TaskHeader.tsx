import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { MdAdd } from 'react-icons/md'

export default function TaskHeader(props: { title: string; count: number; color: string }) {
	return (
		<div className="w-full h-14 flex items-center justify-between bg-white rounded-md mb-2 py-3">
			<div className={`w-[3px] h-full rounded-full ${props.color}`}></div>
			<div className="flex items-center -ml-3 gap-4">
				<span className="text-[14px] text-[#4D5E80] font-black uppercase">
					{props.title}
				</span>
				<div className="w-[30px] h-[30px] flex justify-center items-center border border-gray-100 rounded-full">
					<span className="text-[12px] text-[#6B7A99] font-bold">{props.count}</span>
				</div>
			</div>
			<div className="flex items-center gap-3 mr-4">
				<button type="button">
					<BiDotsHorizontalRounded className="w-6 h-6 text-[#C3CAD9] hover:text-[#656e80]" />
				</button>
				<button type="button">
					<MdAdd className="w-6 h-6 text-[#C3CAD9] hover:text-[#656e80]" />
				</button>
			</div>
		</div>
	)
}
