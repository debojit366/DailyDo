import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    data:{
        type:String,
    },
    user:{

    }
})
const task = mongoose.model('Task',taskSchema)
export default task