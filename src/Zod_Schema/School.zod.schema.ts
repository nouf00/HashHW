import{z , TypeOf} from 'zod'

export const Studett=z.object({
    body:z.object({
  name:z.string({required_error:"nsme is requerd ", invalid_type_error:" Enter  string "}).min(3).max(8),
  age:z.number().lte(18),
  major:z.string({required_error:"nsme is requerd ", invalid_type_error:" Enter string "})



    }),
    params:z.object({
        id:z.string({required_error:"Please enter id in params"})
})
})


export type studentType =z.infer<typeof Studett>

export const Classroom =z.object({
    body:z.object({
        Classname :z.string({required_error:"nsme is requerd ", invalid_type_error:" Enter string "})
    }),

    params:z.object({
        id:z.string({required_error:"Please enter id in params"})
})
})
export type classromType =z.infer<typeof Classroom >

export const Teacher=z.object({
    body:z.object({
        Teachername :z.string({required_error:"nsme is requerd ", invalid_type_error:" Enter string "})
    }),

    params:z.object({
        id:z.string({required_error:"Please enter id in params"})
})
})
export type TeacherType =z.infer<typeof Teacher >



