import { TbMoodEmpty } from 'react-icons/tb'

export default function EmptySection() {
	return (
		<div className="p-14 w-full xl:min-w-[1110px] h-[calc(85vh)] max-h-[800px] flex flex-col justify-center items-center">
			<TbMoodEmpty
				className={`w-[40px] h-[40px] text-[#C3CAD9] group-hover:text-[#3361FF]`}
			/>
			<span className="text-[16px] text-center text-[#ADB8CC] font-normal block mt-5">
				This Section is Empty!
			</span>
		</div>
	)
}
