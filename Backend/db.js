import mongoose from "mongoose";

export const ConnectDB=async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}