import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { connectdb } from "@/DataBase";
import UserModelA from "@/Model/UserModel";
import { cookies } from "next/headers";

export const GET = async()=>{
    try {
        await connectdb();
        const getcookie = await cookies();
        const token = await getcookie.get("token") || "";
        if(token==""){
            return(
                NextResponse.json({
                    success: false,
                    message: "Please login"
                },{
                    headers: {
                   'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                   'Pragma': 'no-cache',
                   'Expires': '0',
                 }})
            )
        }
        const decodeddata =  jwt.verify(token.value,process.env.NEXT_PUBLIC_JET_TOKEN);

        const userdata = await UserModelA.findById(decodeddata.id);
        return(
            NextResponse.json({
                success: true,
                userdata: userdata
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
                success: false,
                message:error
            })
        )
    }
} 