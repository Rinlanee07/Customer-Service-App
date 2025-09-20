import React from 'react'
import { NavbarItem } from '../nav-menu/NavbarItem'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { SidebarItemMenu } from '../sidebar-menu/SidebarItemMenu'

export const Navbar = () => {
    return (
        <div className='flex h-[62px] border items-center shadow justify-between '>
            <div className='px-4 flex items-center'>
                <Image src="/assets/images/logo/PHOENIX_60x60.png" alt='Logo' width={38} height={38} />
                <Link href="/"><span className='pl-2 text-2xl text-cyan-400 font-lexend 
                hover:text-cyan-500'>PHOENIX</span></Link>
                <div className='md:hidden pl-5'>
                    <Sheet>
                        <SheetTrigger className='bg-white px-3 py-1.5 rounded-xl border'><Menu /></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetDescription>
                                    <SheetTitle className='flex gap-2'>
                                        <Image src="/assets/images/logo/PHOENIX_60x60.png" alt='Logo' width={38} height={38} />
                                        <Link href="/"><span className='pl-2 text-2xl text-cyan-400 font-lexend 
                hover:text-cyan-500'>PHOENIX</span></Link>
                                    </SheetTitle>
                                    <div className='mt-3'>
                                        <SidebarItemMenu />
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className='pr-8'>
                <NavbarItem />
            </div>
        </div>
    )
}
