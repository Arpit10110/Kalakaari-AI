import mongoose from "mongoose";
export const connectdb = ()=>{
    mongoose.connect(process.env.NEXT_PUBLIC_MongooseUrl,{dbName:"Kalakaari"}).then(()=>{
        console.log("DB connected");
    }).catch((e)=>{
        console.log(e);
    })
}