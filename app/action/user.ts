import prisma from "@/lib/prisma";
import { Response } from "@/lib/response";
import { IUser } from "@/types/types";


export const getUser = async(email:string) => {
    const user = await prisma.user.findUnique({
        where : {
            email : email
        }
    }
    )

    if(!user){
        return {
            message : "user not exists",
            status : false,
            data : {}
        }
    }

    return {
        message  : 'user exists',
        status : true,
        data : user
    }
}

export const createUser = async(user:IUser) => {
    const userData = await prisma.user.create({
        data : {
            ...user
        }
    })

    return Response(true,'user created successfully!',userData)
}