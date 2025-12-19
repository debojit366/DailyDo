import mongoose from "mongoose";
const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDB connection successful");
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;