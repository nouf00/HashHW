import{z , TypeOf} from 'zod'

export const Userregister=z.object({
 body:z.object({
  email :z.string({required_error:" email is  requerd" , 
  invalid_type_error: "email the most be a String"}).email(),
   password:z.string({required_error:" Password is  requerd" , 
    invalid_type_error: "Password the most be a String"}).min(8).max(40),
   username:z.string({required_error: "the username is requerd"})
}),
params:z.object({
    id:z.string({required_error:"Please enter id in params"})
})



})
export type userregisterType =z.infer<typeof Userregister>



export const UserLogin=z.object({
    body:z.object({
     email :z.string({required_error:" email is  requerd" }),
      password:z.string({required_error:" Password is  requerd" }),
   }),
   params:z.object({
       id:z.string({required_error:"Please enter id in params"})
   })
   
   
   
   })
   export type UserLoginType =z.infer<typeof UserLogin>