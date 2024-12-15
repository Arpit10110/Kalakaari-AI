import { connectdb } from "@/DataBase";
import UserModelA from "@/Model/UserModel";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req)=>{
    try {
            const {username,email,password}= await req.json();
            await connectdb();
            let finduser = await UserModelA.findOne({email})
            if(finduser){
                return(
                    NextResponse.json({
                        success:false,
                        message:"User already exists"
                    })
                )
            }
            const hashpassword = await bcrypt.hash(password,10);
            await UserModelA.create({
                email:email,
                password:hashpassword,
                username:username,
                tocken:5
            })
            return(
                NextResponse.json({
                    success:true,
                    message:"User created successfully"
                }, {
                     headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                  }})

            )
    } catch (error) {
        return(
            NextResponse.json({
                success: false,
                error:error
            })
        )
    }
}