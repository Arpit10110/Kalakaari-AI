import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tocken:{
        type:Number,
        required:true
    }
})

const UserModelA = mongoose.models.UserModelA || mongoose.model('UserModelA', Schema);
export default UserModelA;