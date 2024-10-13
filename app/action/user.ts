import prisma from "@/lib/prisma";
import { Response } from "@/lib/response";
import { IUser } from "@/types/types";


export const getUser = async (email: string) => {
    console.log('work till here');
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  
    if (!user) {
      return {
        message: "User does not exist",
        status: false,
        data: {},
      };
    }
  
    return {
      message: "User exists",
      status: true,
      data: user,
    };
  };
  
  export const createUser = async (user: IUser) => {
    console.log('work till here 2');
    const userData = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,  
        image: user.image,
      },
    });
  
    return Response(true, "User created successfully!", userData);
  };
  