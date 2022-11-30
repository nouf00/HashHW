import { NextFunction, Request, Response } from 'express';
import { TeacherType , studentType,classromType} from '../Zod_Schema/School.zod.schema';
import { prisma } from '../Config/db';
import { Student , teacher , Clssroom, classSt} from '@prisma/client';
//student controller______________________________________


export const getAllStudent =async(req:Request,res:Response)=>{
    try{
    const Studen= await prisma.Student.findMany(); // ارجاع قيم جميع الطلاب بدون شرط 
    return res.status(200).json(Studen)}
    catch(error){
        return res.status(400).json({ message:"is not work "})
    }
}

export const PostStudent =async(req:Request,res:Response)=>{
    try{
        const Newteacher = req.body as studentType['body']
      await prisma.Student.create({  // اضافة عضو جديد 
        data:Newteacher // البيانات المرسله 
     })


    return res.status(200).json({message:" Maprok "})
}


    catch(error){
        return res.status(400).json({ message:"invaled Enter"})
    }
}

export const getoneStudent =async(req:Request,res:Response)=>{
    try{
        const {id}=req.params as studentType["params"]
    const Studen= await prisma.Student.findFirst({      //البحث في الجدول 
        where: { id },
    });
    return res.status(200).json(Studen)}
    catch(error){
        console.log(error)
        return res.status(400).json({ message:"is not work "})
    }
}





//Teacher Contyoller ______________________________________________________________________


export const getAllTeacher =async(req:Request,res:Response)=>{
    try{
    const GetTaecher= await prisma.teacher.findMany(); // ارجاع جميع القيم  بدون شرط 
    return res.status(200).json(GetTaecher)}
    catch(error){
        return res.status(400).json({ message:"is not work "})
    }
}

export const PostTeacher =async(req:Request,res:Response)=>{
    try{
        const NewStudent = req.body as TeacherType['body']
      await prisma.teacher.create({  // اضافة عضو جديد 
        data:NewStudent // البيانات المرسله 
     })


    return res.status(200).json({message:" Maprok "})
}


    catch(error){
        return res.status(400).json({ message:"invaled Enter"})
    }
}

export const getoneTeacher =async(req:Request,res:Response)=>{
    try{
        const {id}=req.params as TeacherType["params"]
    const Teacher= await prisma.teacher.findFirst({      //البحث في الجدول 
        where: { id },
    });
    return res.status(200).json(Teacher)}
    catch(error){
        console.log(error)
        return res.status(400).json({ message:"is not work "})
    }
}
// calssrom__________________________________________________________


export const getAllclass =async(req:Request,res:Response)=>{
    try{
    const GetClass= await prisma.clssroom.findMany(); // ارجاع جميع القيم  بدون شرط 
    return res.status(200).json(GetClass)}
    catch(error){
        return res.status(400).json({ message:"is not work "})
    }
}

export const PostClass =async(req:Request,res:Response)=>{
    try{
        const NewClass = req.body as classromType['body']
      await prisma.teacher.create({  // اضافة طالب جديد 
        data:NewClass // البيانات المرسله 
     })


    return res.status(200).json({message:" Maprok "})
}


    catch(error){
        return res.status(400).json({ message:"invaled Enter"})
    }
}

export const getoneClass =async(req:Request,res:Response)=>{
    try{
        const {id}=req.params as classromType["params"]
    const Classroomid= await prisma.clssroom.findFirst({      //البحث في الجدول 
        where: { id },
    });
    return res.status(200).json(Classroomid)}
    catch(error){
        console.log(error)
        return res.status(400).json({ message:"is not work "})
    }
}