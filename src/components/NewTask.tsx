import { useState } from 'react'
import Image from 'next/image'
import { RxCross2 } from 'react-icons/rx'
import { AiFillFlag } from 'react-icons/ai'
import { MdAlarm, MdAttachFile } from 'react-icons/md'

export default function NewTask() {
	const [newTask, setNewTask] = useState(false)

	return (
		<>
			{!newTask && (
				<div className="w-full px-4">
					<button
						type="button"
						onClick={() => {
							setNewTask(true)
						}}
						className="text-[12px] uppercase text-[#6B7A99] hover:text-[#536281] font-bold"
					>
						+ New Task
					</button>
				</div>
			)}
			{newTask && (
				<div className="w-full p-5 bg-white rounded-md">
					<div className="w-full flex justify-between items-center">
						<div className="flex items-center gap-2">
							<button
								type="button"
								onClick={() => {
									setNewTask(false)
								}}
							>
								<RxCross2 className="w-6 h-6 text-[#ADB8CC] hover:text-[#536281]" />
							</button>
							<input
								type="text"
								placeholder="Task name or type"
								className="text-[12px] placeholder:text-[#ADB8CC] text-[#536281] font-bold focus:outline-none focus:border-0"
							/>
						</div>
						<div
							className={`w-[20px] h-[20px] -mr-1.5 bg-[#8833FF]/30 rounded-full overflow-clip`}
						>
							<Image
								src={'/Avatar2.png'}
								alt="Contributor"
								width={20}
								height={20}
								loading="eager"
							/>
						</div>
					</div>
					<div className="flex justify-between items-center pt-5">
						<div className="w-full flex items-center gap-3">
							<div className="flex items-center gap-2">
								<button type="button">
									<AiFillFlag className="w-5 h-5 text-[#C3CAD9] hover:text-[#656e80]" />
								</button>
							</div>
							<div className="flex items-center gap-3">
								<button type="button">
									<MdAttachFile className="w-6 h-6 rotate-90 text-[#C3CAD9] hover:text-[#656e80]" />
								</button>
							</div>
							<div className="flex items-center gap-3">
								<button type="button">
									<MdAlarm className="w-6 h-6 text-[#C3CAD9] hover:text-[#656e80]" />
								</button>
							</div>
						</div>
						<button
							type="button"
							className="px-3 py-1.5 bg-[#3361FF] rounded-md text-white text-[14px]"
						>
							Save
						</button>
					</div>
				</div>
			)}
		</>
	)
}
