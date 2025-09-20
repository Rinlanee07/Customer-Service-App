import { Token } from '@/datatype/token.datatype';
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


interface BearState {
    userInfo: Token;
    setUserInfo: (data: Token) => void
}

export const useUserInfoStore = create<BearState>()(
    devtools(
        persist(
            (set) => ({
                userInfo: {
                    email: "",
                    exp: 0,
                    iat: 0,
                    id: 0,
                    role: ""
                },
                setUserInfo: (data: Token) => set(() => ({ userInfo: data })),
            }),
            {
                name: 'user-storage',
            },
        ),
    ),
)