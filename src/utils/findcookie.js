"use server"

import { cookies } from "next/headers";

export const findcookies = async()=>{
    const getcookies = await cookies();
    const token = await getcookies.get("token");
    if(token ==  undefined){
        return false;
    }else{
        return true;
    }
}