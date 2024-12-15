import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async()=>{
    try {
        const getcookie = await cookies();
        getcookie.set("token", "", {
            maxAge: 0, 
            path: "/",  
          });
        return(
            NextResponse.json({
                success:true,
                message:"LogOut successfully"
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