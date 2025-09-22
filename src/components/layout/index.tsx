import React, { ReactNode } from "react"
import { Navbar } from "./Navbar"
import { SideBar } from "./SideBar"
type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
    return (
        <div className='h-screen w-full'>
            <Navbar />
            <main className="flex h-full">
                <div>
                    <SideBar />
                </div>
                <div className="p-8 w-full h-full bg-gray-100 overflow-auto">
                    {children}
                </div>

                {/* <div className="p-8 w-full bg-gray-100 h-full flex-grow overflow-auto">
                    {children}
                </div> */}
            </main>
            {/* <Footer /> */}
        </div>
    )
}