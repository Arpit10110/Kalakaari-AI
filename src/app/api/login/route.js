import { connectdb } from "@/DataBase";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import UserModelA from "@/Model/UserModel";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async(req)=>{
    try {
        connectdb();
        const {email, password}= await req.json();
        let finduser = await UserModelA.findOne({email});
        console.log(finduser);
        if(finduser == null){
            return(
                NextResponse.json({
                    success: false,
                    message:"User not found"
                })
            )
        }

        const verifypass = await bcrypt.compare(password,finduser.password)
        console.log(verifypass);
        if(verifypass == false){
            return(
                NextResponse.json({
                    success: false,
                    message:"Wrong password"
                },{
                    headers: {
                   'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                   'Pragma': 'no-cache',
                   'Expires': '0',
                 }})
            )
        }

        const createtocken = {
            id:finduser._id,
            username:finduser.username,
            email:finduser.email
        }

        const token = jwt.sign(createtocken,process.env.NEXT_PUBLIC_JET_TOKEN,{expiresIn:"1d"});
        const getcookies = await cookies();
        await getcookies.set("token", token,{
            maxAge: 24 * 60 * 60,
        });

        return(
            NextResponse.json({
                success: true,
                userdata:{
                    username:finduser.username,
                    email:finduser.email
                }
            },{
                headers: {
               'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
               'Pragma': 'no-cache',
               'Expires': '0',
             }})
        )
        
    } catch (error) {
        return(
            NextResponse.json({
                success:false,
                errror:error.message
            },{
                headers: {
               'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
               'Pragma': 'no-cache',
               'Expires': '0',
             }})
        )
    }
}