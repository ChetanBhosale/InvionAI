import Sidebar from '@/components/ui/custom/sidebar/sidebar'
import { loginIsRequiredServer } from '@/lib/auth'
import React, { ReactNode } from 'react'
import { TbPlayerTrackNext } from 'react-icons/tb'

type Props = {
    children: ReactNode
}

const layout = async ({ children }: Props) => {

    const session = await loginIsRequiredServer()


    return (
        <div className='w-full flex'>
            <Sidebar />
            {children}
        </div>
    )
}

export default layout