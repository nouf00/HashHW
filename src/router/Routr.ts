import express from "express";
import { getAllclass,
 getAllStudent,
 getAllTeacher, 
getoneClass,
getoneStudent,
getoneTeacher,
PostClass,
PostStudent, 
PostTeacher  } from "../controller/School.controller";
import { postUserLogin,
    postUserrigester} from "../controller/user.controller";

import vaidation from "../Middlwear/valdation";
import{
     Studett , 
     Classroom ,
     Teacher}   from '../Zod_Schema/School.zod.schema'
import { UserLogin,
     Userregister } from "../Zod_Schema/user.zod.schema";

const router = express.Router();


router.get('/student', getAllStudent)
router.get('/teacher', getAllTeacher)
router.get('/classroom', getAllclass)




router.get('/student/:id', getoneClass)
router.get('/teacher/:id', getoneTeacher)
router.get('/classroom/:id', getoneStudent)

router.post('/student',vaidation(Studett), PostStudent)
router.post('/teacher',  vaidation(Teacher), PostTeacher)
router.post('/classroom',vaidation(Classroom), PostClass)

//Auth Part ____________________________________________________________________
router.post('/log', vaidation(UserLogin), postUserLogin)
router.post('/rigester' ,vaidation(Userregister), postUserrigester)

router.get('/log/:username' )


export default router

