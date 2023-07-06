import Head from 'next/head'
import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'
import SideBar from '../components/SideBar'
import ContentSection from '../components/ContentSection'
import { useState } from 'react'

export default function Home() {
	const [isSideNavVisible, setIsSideNavVisible] = useState(true)

	function toggleSideNav() {
		setIsSideNavVisible(!isSideNavVisible)
	}

	return (
		<>
			<Head>
				<title>We Frame Tech Dashboard</title>
				<link rel="shortcut icon" href="/we_frame_tech_logo.svg" type="image/x-icon" />
			</Head>
			<main className="bg-[#F7F8FA]">
				<NavBar onMenuButtonClick={toggleSideNav} />
				<div className="w-full h-[calc(100vh-80px)] flex">
					<SideNav isSideNavVisble={isSideNavVisible} />
					<div className="w-full flex overflow-x-hidden">
						<SideBar />
						<ContentSection />
					</div>
				</div>
			</main>
		</>
	)
}
