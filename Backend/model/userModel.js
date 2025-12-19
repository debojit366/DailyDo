import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
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
        minlength:[8,"password must be atleast 8 characters long"],
        select:false
    }
},{timestamps:true})
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
})
userSchema.methods.getSignedToken = function(){
    const accessToken = jwt.sign({id:this._id},process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRE_IN})
    return accessToken
}
userSchema.methods.comparePassword =async function(password){
    return await bcrypt.compare(password,this.password);
}
const User = mongoose.model('user',userSchema);
export default User



