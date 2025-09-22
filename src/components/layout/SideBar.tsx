import React from 'react'
import { SidebarItemMenu } from '../sidebar-menu/SidebarItemMenu'

export const SideBar = () => {
    return (
        <div className='relative'>
            <div className='h-screen w-fit pt-4 px-4 flex-1 border-r hidden md:flex shadow-lg justify-center '>
                <SidebarItemMenu />
            </div>
    
        </div>

    )
}
