import { NextResponse } from "next/server";
import { connectdb } from "@/DataBase";
import bcrypt from "bcrypt"
export const GET = async()=>{
    try {
        await connectdb()
        return(
            NextResponse.json({
                success:true,
                message:"Welcome to the backend of the kalakaari",
            }, {
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
            })
        )
        
    } catch (error) {
        return(
            NextResponse.json({
                success:false,
                error:error
            })
        )
    }
   
}