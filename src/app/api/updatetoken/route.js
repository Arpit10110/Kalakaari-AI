import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { connectdb } from "@/DataBase";
import UserModelA from "@/Model/UserModel";
import { cookies } from "next/headers";

export const POST = async(req)=>{
    try {

        const {addtoken} = await req.json();
       await connectdb();

        const getcookies = await cookies();
        const token = getcookies.get('token');
        const decodeddata =  jwt.verify(token.value,process.env.NEXT_PUBLIC_JET_TOKEN);
        const userdata = await UserModelA.findById(decodeddata.id);
        userdata.tocken = userdata.tocken + addtoken;
        await userdata.save();
        return(
            NextResponse.json({
                success: true,
                message:"Plan purchased successfully"
            })
        )
    } catch (error) {
        return(
            NextResponse.json({
                success:true,
                error:error.message
            })
        )
    }
}