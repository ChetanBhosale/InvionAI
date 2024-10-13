'use client'

import { signIn } from 'next-auth/react'
import React, { FC, ReactNode } from 'react'

interface Props {
    index: number,
    name: string,
    Icon: ReactNode
}

function handleSignInUser(provider: string) {
    console.log('worked');
    signIn(provider)
}

const AuthButton: FC<Props> = ({ Icon, name, index }) => {
    return (
        <div onClick={() => handleSignInUser(name.toLowerCase())} key={index} className='flex gap-3 items-center group query mx-4 my-2 bg-front text-back py-2 transition-all box-content rounded-2xl hover:rounded-3xl duration-300 cursor-pointer  text-xl  px-6'>
            {Icon}
            {name}
        </div>
    )
}

export default AuthButton