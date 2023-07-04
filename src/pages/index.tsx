import Head from 'next/head'
import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'
import SideBar from '../components/SideBar'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { MdAdd } from 'react-icons/md'

export default function Home() {
	return (
		<>
			<Head>
				<title>We Frame Tech Dashboard</title>
				<link rel="shortcut icon" href="/we_frame_tech_logo.svg" type="image/x-icon" />
			</Head>
			<main className="bg-[#F7F8FA]">
				<NavBar />
				<div className="w-full flex">
					<SideNav />
					<SideBar />
					<div className="w-full p-6">
						<div className="w-full h-full border border-gray-200 rounded-xl">
							<div className="w-full h-20 border-b border-gray-200"></div>
							<div className="p-14 grid grid-cols-4 gap-7">
								<div className="w-full flex flex-col gap-6">
									<div className="w-full h-14 flex items-center justify-between bg-white rounded-md mb-2 py-3">
										<div className="w-[3px] h-full bg-[#8833FF] rounded-full"></div>
										<div className="flex items-center -ml-3 gap-4">
											<span className="text-[14px] text-[#4D5E80] font-black uppercase">
												To do
											</span>
											<div className="w-[30px] h-[30px] flex justify-center items-center border border-gray-100 rounded-full">
												<span className="text-[12px] text-[#6B7A99] font-bold">
													5
												</span>
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
								</div>
								<div className="w-full">
									<div className="w-full h-14 flex items-center justify-between bg-white rounded-md mb-2 py-3">
										<div className="w-[3px] h-full bg-[#33BFFF] rounded-full"></div>
										<div className="flex items-center -ml-3 gap-4">
											<span className="text-[14px] text-[#4D5E80] font-black uppercase">
												In work
											</span>
											<div className="w-[30px] h-[30px] flex justify-center items-center border border-gray-100 rounded-full">
												<span className="text-[12px] text-[#6B7A99] font-bold">
													5
												</span>
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
								</div>
								<div className="w-full">
									<div className="w-full h-14 flex items-center justify-between bg-white rounded-md mb-2 py-3">
										<div className="w-[3px] h-full bg-[#FFCB33] rounded-full"></div>
										<div className="flex items-center -ml-3 gap-4">
											<span className="text-[14px] text-[#4D5E80] font-black uppercase">
												Review
											</span>
											<div className="w-[30px] h-[30px] flex justify-center items-center border border-gray-100 rounded-full">
												<span className="text-[12px] text-[#6B7A99] font-bold">
													5
												</span>
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
								</div>
								<div className="w-full">
									<div className="w-full h-14 flex items-center justify-between bg-white rounded-md mb-2 py-3">
										<div className="w-[3px] h-full bg-[#29CC39] rounded-full"></div>
										<div className="flex items-center -ml-3 gap-4">
											<span className="text-[14px] text-[#4D5E80] font-black uppercase">
												Done
											</span>
											<div className="w-[30px] h-[30px] flex justify-center items-center border border-gray-100 rounded-full">
												<span className="text-[12px] text-[#6B7A99] font-bold">
													5
												</span>
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
