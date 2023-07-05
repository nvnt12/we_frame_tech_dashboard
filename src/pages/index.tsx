import Head from 'next/head'
import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'
import SideBar from '../components/SideBar'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { MdAdd, MdAlarm, MdAttachFile } from 'react-icons/md'
import Image from 'next/image'
import { BsListUl } from 'react-icons/bs'
import { CgPlayListCheck } from 'react-icons/cg'
import { MdDashboard } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Home() {
	return (
		<>
			<Head>
				<title>We Frame Tech Dashboard</title>
				<link rel="shortcut icon" href="/we_frame_tech_logo.svg" type="image/x-icon" />
			</Head>
			<main className="bg-[#F7F8FA]">
				<NavBar />
				<div className="w-full h-[calc(100vh-80px)] flex">
					<SideNav />
					<div className="w-full flex overflow-y-scroll">
						<SideBar />
						<div className="w-full h-[100vh] p-6">
							<div className="w-full h-full border border-gray-200 rounded-xl">
								<div className="w-full flex h-20 border-b border-gray-200 px-8 gap-24">
									<div className="w-full h-full grid grid-cols-6 gap-6">
										<div className="w-full h-full flex gap-5 justify-center items-center hover:border-b-[3px] hover:border-[#3361FF]">
											<CgPlayListCheck className="w-[24px] h-[24px] text-[#C3CAD9]" />
											<span className="text-[12px] text-[#ADB8CC] font-bold">
												Notes
											</span>
										</div>
										<div className="w-full h-full flex gap-5 justify-center items-center hover:border-b-[3px] hover:border-[#3361FF]">
											<MdDashboard className="w-[20px] h-[20px] text-[#C3CAD9]" />
											<span className="text-[12px] text-[#ADB8CC] font-bold">
												Boards
											</span>
										</div>
										<div className="w-full h-full flex gap-5 justify-center items-center hover:border-b-[3px] hover:border-[#3361FF]">
											<MdDashboard className="w-[20px] h-[20px] text-[#C3CAD9]" />
											<span className="text-[12px] text-[#ADB8CC] font-bold">
												Calendar
											</span>
										</div>
										<div className="w-full h-full flex gap-5 justify-center items-center hover:border-b-[3px] hover:border-[#3361FF]">
											<MdDashboard className="w-[20px] h-[20px] text-[#C3CAD9]" />
											<span className="text-[12px] text-[#ADB8CC] font-bold">
												Gantt
											</span>
										</div>
										<div className="w-full h-full flex gap-5 justify-center items-center hover:border-b-[3px] hover:border-[#3361FF]">
											<MdDashboard className="w-[20px] h-[20px] text-[#C3CAD9]" />
											<span className="text-[12px] text-[#ADB8CC] font-bold">
												Timeline
											</span>
										</div>
										<div className="w-full h-full flex gap-5 justify-center items-center hover:border-b-[3px] hover:border-[#3361FF]">
											<MdDashboard className="w-[20px] h-[20px] text-[#C3CAD9]" />
											<span className="text-[12px] text-[#ADB8CC] font-bold">
												Activity
											</span>
										</div>
									</div>
									<div className="h-full flex items-center">
										<div className="hidden bg-white rounded-full h-10 w-48 shadow-md shadow-gray-100 2xl:flex 2xl:justify-between px-6">
											<div className="w-full flex items-center gap-2">
												<AiOutlineSearch className="h-5 w-5 text-[#C3CAD9]" />
												<input
													type="text"
													placeholder="Search Tasks"
													className="w-full text-[#768ab1] font-bold placeholder:text-[12px] placeholder:text-[#7D8FB3] placeholder:font-bold focus:outline-none"
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="p-14 grid grid-cols-4 gap-7">
									<div className="w-full flex flex-col gap-3">
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
										<div className="w-full bg-white rounded-md">
											<Image
												src={'/Image.png'}
												alt={'Task Image'}
												width={230}
												height={170}
												className="w-full"
												loading="eager"
											/>
											<div className="w-full flex justify-between items-center mt-4 px-4">
												<span className="text-[12px] text-[#ADB8CC] font-bold">
													Sapce Task 2
												</span>
												<div className="w-[20px] h-[20px] bg-[#8833FF]/30 rounded-full overflow-clip">
													<Image
														src="/Avatar2.png"
														alt="Avatar 2 Image"
														width={20}
														height={20}
														loading="eager"
													/>
												</div>
											</div>
											<span className="text-[12px] text-left text-[#6B7A99] font-bold mt-1 px-4">
												Make Money Online Through
											</span>
											<div className="w-full p-4 flex items-center gap-3">
												<div className="flex items-center gap-2">
													<button type="button">
														<BsListUl className="w-5 h-5 text-[#C3CAD9] hover:text-[#656e80]" />
													</button>
													<span className="text-[12px] text-[#6B7A99] font-bold">
														5
													</span>
												</div>
												<div className="flex items-center gap-3">
													<button type="button">
														<MdAttachFile className="w-6 h-6 rotate-90 text-[#C3CAD9] hover:text-[#656e80]" />
													</button>
													<span className="text-[12px] text-[#6B7A99] font-bold">
														2
													</span>
												</div>
												<div className="flex items-center gap-3">
													<button type="button">
														<MdAlarm className="w-6 h-6 text-[#C3CAD9] hover:text-[#656e80]" />
													</button>
													<span className="text-[12px] text-[#6B7A99] font-bold">
														6 days left
													</span>
												</div>
											</div>
										</div>
										<div className="w-full bg-white rounded-md py-4">
											<div className="w-full flex justify-between items-center px-4">
												<span className="text-[12px] text-[#ADB8CC] font-bold">
													Sapce Task 2
												</span>
												<div className="flex">
													<div className="w-[20px] h-[20px] bg-[#88fffF]/30 rounded-full overflow-clip -mr-2">
														<Image
															src="/Avatar2.png"
															alt="Avatar 2 Image"
															width={20}
															height={20}
															loading="eager"
														/>
													</div>
													<div className="z-20 w-[20px] h-[20px] bg-[#8833FF]/30 rounded-full overflow-clip">
														<Image
															src="/Avatar2.png"
															alt="Avatar 2 Image"
															width={20}
															height={20}
															loading="eager"
														/>
													</div>
												</div>
											</div>
											<span className="text-[12px] text-left text-[#6B7A99] font-bold mt-1 px-4">
												Make Money Online Through
											</span>
										</div>
										<div className="w-full bg-white rounded-md py-4">
											<div className="w-full flex justify-between items-center px-4">
												<span className="text-[12px] text-[#ADB8CC] font-bold">
													Sapce Task 2
												</span>
												<div className="flex">
													<div className="w-[20px] h-[20px] bg-[#8Acd3F]/30 rounded-full overflow-clip -mr-2">
														<Image
															src="/Avatar2.png"
															alt="Avatar 2 Image"
															width={20}
															height={20}
															loading="eager"
														/>
													</div>
													<div className="w-[20px] h-[20px] bg-[#8833FF]/30 rounded-full overflow-clip -mr-2 z-20">
														<Image
															src="/Avatar2.png"
															alt="Avatar 2 Image"
															width={20}
															height={20}
															loading="eager"
														/>
													</div>
													<div className="w-[20px] h-[20px] bg-[#cda3FF]/30 rounded-full overflow-clip z-30">
														<Image
															src="/Avatar2.png"
															alt="Avatar 2 Image"
															width={20}
															height={20}
															loading="eager"
														/>
													</div>
												</div>
											</div>
											<span className="text-[12px] text-left text-[#6B7A99] font-bold mt-1 px-4">
												Search Engine Optimization...
											</span>
										</div>
										<div className="w-full bg-white rounded-md py-4">
											<div className="w-full flex justify-between items-center px-4">
												<span className="text-[12px] text-[#ADB8CC] font-bold">
													Sapce Task 2
												</span>
												<div className="w-[20px] h-[20px] bg-[#8833FF]/30 rounded-full overflow-clip">
													<Image
														src="/Avatar2.png"
														alt="Avatar 2 Image"
														width={20}
														height={20}
														loading="eager"
													/>
												</div>
											</div>
											<span className="text-[12px] text-left text-[#6B7A99] font-bold mt-1 px-4">
												Characteristics Of A Successful
											</span>
										</div>
										<div className="w-full bg-white rounded-md py-4">
											<div className="w-full flex justify-between items-center px-4">
												<span className="text-[12px] text-[#ADB8CC] font-bold">
													Sapce Task 2
												</span>
												<div className="w-[20px] h-[20px] bg-[#8833FF]/30 rounded-full overflow-clip">
													<Image
														src="/Avatar2.png"
														alt="Avatar 2 Image"
														width={20}
														height={20}
														loading="eager"
													/>
												</div>
											</div>
											<span className="text-[12px] text-left text-[#6B7A99] font-bold mt-1 px-4">
												Getting Free Publicity
											</span>
										</div>
										<div className="w-full bg-white rounded-md py-4">
											<div className="w-full flex justify-between items-center px-4">
												<span className="text-[12px] text-[#ADB8CC] font-bold">
													Sapce Task 2
												</span>
												<div className="w-[20px] h-[20px] bg-[#8833FF]/30 rounded-full overflow-clip">
													<Image
														src="/Avatar2.png"
														alt="Avatar 2 Image"
														width={20}
														height={20}
														loading="eager"
													/>
												</div>
											</div>
											<span className="text-[12px] text-left text-[#6B7A99] font-bold mt-1 px-4">
												Importance Of The Custom..
											</span>
										</div>
										<div className="w-full px-4">
											<button
												type="button"
												className="text-[12px] uppercase text-[#6B7A99] hover:text-[#536281] font-bold"
											>
												+ New Task
											</button>
										</div>
									</div>
									<div className="w-full flex flex-col gap-3">
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
										<div className="w-full bg-white rounded-md py-4">
											<div className="w-full flex justify-between items-center px-4">
												<span className="text-[12px] text-[#ADB8CC] font-bold">
													Sapce Task 2
												</span>
												<div className="w-[20px] h-[20px] bg-[#8833FF]/30 rounded-full overflow-clip">
													<Image
														src="/Avatar2.png"
														alt="Avatar 2 Image"
														width={20}
														height={20}
														loading="eager"
													/>
												</div>
											</div>
											<span className="text-[12px] text-left text-[#6B7A99] font-bold mt-1 px-4">
												Types of Paper In Catalog
											</span>
										</div>
										<div className="w-full bg-white rounded-md">
											<Image
												src={'/Image.png'}
												alt={'Task Image'}
												width={230}
												height={170}
												loading="eager"
												className="w-full"
											/>
											<div className="w-full flex justify-between items-center mt-4 px-4">
												<span className="text-[12px] text-[#ADB8CC] font-bold">
													Sapce Task 2
												</span>
												<div className="w-[20px] h-[20px] bg-[#8833FF]/30 rounded-full overflow-clip">
													<Image
														src="/Avatar2.png"
														alt="Avatar 2 Image"
														width={20}
														height={20}
														loading="eager"
													/>
												</div>
											</div>
											<span className="text-[12px] text-left text-[#6B7A99] font-bold mt-1 px-4">
												Global Resorts Network
											</span>
											<div className="w-full p-4 flex items-center gap-3">
												<div className="flex items-center gap-2">
													<button type="button">
														<BsListUl className="w-5 h-5 text-[#C3CAD9] hover:text-[#656e80]" />
													</button>
													<span className="text-[12px] text-[#6B7A99] font-bold">
														5
													</span>
												</div>
												<div className="flex items-center gap-3">
													<button type="button">
														<MdAttachFile className="w-6 h-6 rotate-90 text-[#C3CAD9] hover:text-[#656e80]" />
													</button>
													<span className="text-[12px] text-[#6B7A99] font-bold">
														2
													</span>
												</div>
												<div className="flex items-center gap-3">
													<button type="button">
														<MdAlarm className="w-6 h-6 text-[#C3CAD9] hover:text-[#656e80]" />
													</button>
													<span className="text-[12px] text-[#6B7A99] font-bold">
														6 days left
													</span>
												</div>
											</div>
										</div>
										<div className="w-full bg-white rounded-md py-4">
											<div className="w-full flex justify-between items-center px-4">
												<span className="text-[12px] text-[#ADB8CC] font-bold">
													Sapce Task 2
												</span>
												<div className="w-[20px] h-[20px] bg-[#8833FF]/30 rounded-full overflow-clip">
													<Image
														src="/Avatar2.png"
														alt="Avatar 2 Image"
														width={20}
														height={20}
														loading="eager"
													/>
												</div>
											</div>
											<span className="text-[12px] text-left text-[#6B7A99] font-bold mt-1 px-4">
												Development Apps
											</span>
										</div>
										<div className="w-full bg-white rounded-md py-4">
											<div className="w-full flex justify-between items-center px-4">
												<span className="text-[12px] text-[#ADB8CC] font-bold">
													Sapce Task 2
												</span>
												<div className="w-[20px] h-[20px] bg-[#8833FF]/30 rounded-full overflow-clip">
													<Image
														src="/Avatar2.png"
														alt="Avatar 2 Image"
														width={20}
														height={20}
														loading="eager"
													/>
												</div>
											</div>
											<span className="text-[12px] text-left text-[#6B7A99] font-bold mt-1 px-4">
												Copper Canyon
											</span>
											<div className="w-full px-4 pt-4 flex items-center gap-3">
												<div className="flex items-center gap-2">
													<button type="button">
														<BsListUl className="w-5 h-5 text-[#C3CAD9] hover:text-[#656e80]" />
													</button>
													<span className="text-[12px] text-[#6B7A99] font-bold">
														5
													</span>
												</div>
												<div className="flex items-center gap-3">
													<button type="button">
														<MdAttachFile className="w-6 h-6 rotate-90 text-[#C3CAD9] hover:text-[#656e80]" />
													</button>
													<span className="text-[12px] text-[#6B7A99] font-bold">
														2
													</span>
												</div>
												<div className="flex items-center gap-3">
													<button type="button">
														<MdAlarm className="w-6 h-6 text-[#E62E2E] hover:text-[#656e80]" />
													</button>
													<span className="text-[12px] text-[#E62E2E] font-bold">
														1 days left
													</span>
												</div>
											</div>
										</div>
										<div className="w-full px-4">
											<button
												type="button"
												className="text-[12px] uppercase text-[#6B7A99] hover:text-[#536281] font-bold"
											>
												+ New Task
											</button>
										</div>
									</div>
									<div className="w-full flex flex-col gap-3">
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
										<div className="w-full bg-white rounded-md py-4">
											<div className="w-full flex justify-between items-center px-4">
												<span className="text-[12px] text-[#ADB8CC] font-bold">
													Sapce Task 2
												</span>
												<div className="w-[20px] h-[20px] bg-[#8833FF]/30 rounded-full overflow-clip">
													<Image
														src="/Avatar2.png"
														alt="Avatar 2 Image"
														width={20}
														height={20}
														loading="eager"
													/>
												</div>
											</div>
											<span className="text-[12px] text-left text-[#6B7A99] font-bold mt-1 px-4">
												Astronomy Or Astrology
											</span>
										</div>
										<div className="w-full bg-white rounded-md py-4">
											<div className="w-full flex justify-between items-center px-4">
												<span className="text-[12px] text-[#ADB8CC] font-bold">
													Sapce Task 2
												</span>
												<div className="w-[20px] h-[20px] bg-[#8833FF]/30 rounded-full overflow-clip">
													<Image
														src="/Avatar2.png"
														alt="Avatar 2 Image"
														width={20}
														height={20}
														loading="eager"
													/>
												</div>
											</div>
											<span className="text-[12px] text-left text-[#6B7A99] font-bold mt-1 px-4">
												Astronomy Binoculars A Great
											</span>
										</div>
										<div className="w-full px-4">
											<button
												type="button"
												className="text-[12px] uppercase text-[#6B7A99] hover:text-[#536281] font-bold"
											>
												+ New Task
											</button>
										</div>
									</div>
									<div className="w-full flex flex-col gap-3">
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
										<div className="w-full bg-white rounded-md py-4">
											<div className="w-full flex justify-between items-center px-4">
												<span className="text-[12px] text-[#ADB8CC] font-bold">
													Sapce Task 2
												</span>
												<div className="w-[20px] h-[20px] bg-[#8833FF]/30 rounded-full overflow-clip">
													<Image
														src="/Avatar2.png"
														alt="Avatar 2 Image"
														width={20}
														height={20}
														loading="eager"
													/>
												</div>
											</div>
											<span className="text-[12px] text-left text-[#6B7A99] font-bold mt-1 px-4">
												Copper Canyon
											</span>
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
