'use server'

import { date, success } from "better-auth"
import { error } from "console"
import { auth } from "../better-auth/Auth"
import { inngest } from "@/components/inngest/client"
import { headers } from "next/headers"
import { err } from "inngest/types"

export const signUpWithEmail=async({email,password,fullName,country,investmentGoals,riskTolerance,preferredIndustry}:SignUpFormData)=>{
    try {
        const response=await auth.api.signUpEmail({
            body:{email:email,password:password,name:fullName}
        })
        if(response){
            await inngest.send({
                name:'app/user.created',
               data:{
                email,
                name:fullName,
                country,
                riskTolerance,
                preferredIndustry,
                investmentGoals
               }
            })
        }
        return {success:true,date:response}
    } catch (e) {
       console.log('Sign up failed',e) 
       return{success:false,error:"sign up failed"}
    }
}

export const signOut=async()=>{
    try {
        await auth.api.signOut({headers:await headers()})
    } catch (e) {
      console.log('sign out failed',e)
      return {success:false,error:'sign out failed'}  
    }
}

export const signInWithEmail=async({email,password}:SignInFormData)=>{
    try {
        const response=await auth.api.signInEmail({
            body:{email:email,password:password}
        })
        return {success:true,date:response}
    } catch (e) {
       console.log('Sign in failed',e) 
       return{success:false,error:"sign in failed"}
    }
}