import { NextFunction, Request, Response } from 'express';
import { prisma } from '../Config/db';
import { User, UserRgistr } from '@prisma/client';
import { UserLoginType, userregisterType } from '../Zod_Schema/user.zod.schema';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import  argon2d from 'argon2';

export const postUserLogin=async(req:Request,res:Response)=>{

const {email , password,name}=req.body as User
const user = await prisma.User.findUnique({
  where: { name },
});
if (!user) {
  return res
    .status(400)
    .json({ message: "wrong username or password or email!" });
}
const isValidPassword = await argon2d.verify(user.password, password);
if (!isValidPassword) {
  return res
    .status(400)
    .json({ message: "wrong username or password or email!" });
}
const isValidEmail = await prisma.User.findUnique({
  where: { email },
});
if (!isValidEmail) {
  return res
    .status(400)
    .json({ message: "wrong name or password or email!" });
}
return res.status(200).json({ message: "يالله حيهم" });




}

//_____________________________________________________________________________
export const postUserrigester= async(req:Request,res:Response)=>{

    try{
const newmember =req.body as userregisterType['body']
const haspassword = await argon2d.hash(newmember.password)
newmember.password=haspassword
await prisma.userLogin.create({
    data:newmember
})
return res.status(200).json({ message: "Maprok" });

    }catch(error){
        console.log(error);
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({ message: prismaError.message });
  
    }


  }
