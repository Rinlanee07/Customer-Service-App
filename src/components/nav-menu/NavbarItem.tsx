import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation';
import cookie from 'cookiejs';
import { useUserInfoStore } from '@/store/user.store';

export const NavbarItem = () => {
    const router = useRouter();
    const { setUserInfo } = useUserInfoStore();

    const handleLogout = () => {
        cookie.remove('token');
        router.push('/login'); // เปลี่ยนเส้นทางไปยังหน้า login ที่คุณต้องการ
        setUserInfo({
            email: "",
            exp: 0,
            iat: 0,
            id: 0,
            role: ""
        })
    };
    return (
        <div>
            <Button className='bg-red-700' onClick={handleLogout}>Logout</Button>
        </div>

    )
}
