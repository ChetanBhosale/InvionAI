// 'use client'

import { authConfig } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
// import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {
    // const session = await getServerSession(authConfig)
    // const { data: session, status } = useSession()

    const session = await getServerSession(authConfig)

    console.log(session);
    // console.log(status);
    return (
        <div>page</div>
    )
}

export default page