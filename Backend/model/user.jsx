import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username cant be empty"],
        unique:true,
        trim:true,
        minlength:[3,"username must be atleast 3 characters long"]
    },
    email:{
        type:String,
        required:[true,"email cant be empty"],
        unique:true,
        trim:true,
        minlength:[5,"username must be atleast 5 characters long"]
    },
    password:{
        type:String,
        required:[true,"password cant be empty"],
        minlength:[8,"password must be atleast 8 characters long"]
    }
})
const user = mongoose.model('user',userSchema);
export default user



