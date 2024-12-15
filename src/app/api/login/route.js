import { connectdb } from "@/DataBase";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import UserModelA from "@/Model/UserModel";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async(req)=>{
    try {

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
        if(verifypass == false){
            return(
                NextResponse.json({
                    success: false,
                    message:"Wrong password"
                })
            )
        }

        const createtocken = {
            id:finduser._id,
            username:finduser.username,
            email:finduser.email
        }

        const token = jwt.sign(createtocken,process.env.NEXT_PUBLIC_JET_TOKEN,{expiresIn:"1d"});

        const getcookies = cookies();
        await getcookies.set("token", token, {
            httpOnly: true,
            secure: true, // Ensure this is true for production
            path: "/",
            maxAge: 24 * 60 * 60, // 1 day
          });

        return(
            NextResponse.json({
                success: true,
                userdata:{
                    username:finduser.username,
                    email:finduser.email
                }
            })
        )
        
    } catch (error) {
        return(
            NextResponse.json({
                success:false,
                errror:error
            })
        )
    }
}