import { connectdb } from "@/DataBase"
import UserModelA from "@/Model/UserModel"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const GET = async()=>{
    try {
        await connectdb()

        const getcookies = await cookies();
        const token = await getcookies.get('token')
        const decoded = await jwt.verify(token.value,process.env.NEXT_PUBLIC_JET_TOKEN);
        let user = await UserModelA.findById(decoded.id);
        if(user.tocken<1){
            return NextResponse.json({
               success: false,
               message:"Please Purchase The Token",
            })
        } 

        user.tocken = user.tocken -1;
        user.save();
         return NextResponse.json({
            success: true,
            message:"Token reduced",
         })

        
    } catch (error) {
        return NextResponse.json({
            status:false,
            error:error
        })
    }
} 