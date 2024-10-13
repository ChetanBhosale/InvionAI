// 'use client'

import { loginIsRequiredServer } from '@/lib/auth';
import React from 'react'

const Page = async () => {

    const session = await loginIsRequiredServer()

    return (
        <div className='w-full h-screen'>
            <p className='font-mono py-3 px-4 font-bold text-4xl'>Welcome <span className='text-color font-extrabold font-mono'>{session?.user?.name}</span></p>
        </div>
    )
}

export default Page;
