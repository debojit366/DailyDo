import User from "../model/userModel.js";
import errorHandler from "../utils/errorHandler.js"
import jwt from 'jsonwebtoken'
const sendToken = (res,user)=>{
    const token = user.getSignedToken();
    res.status(200).json({
        success:true,
        message:"user registered successfully",
        token:token,
        user:{
            id:user._id,
            username:user.username
        }
    })
}
const registerController = async (req,res,next)=>{
    const {username , email ,password} = req.body;
    try {
        const user = await User.create({
            username,
            email,
            password
        })
        sendToken(res,user);
    } catch (error) {
        return next(error)
    }
}
const loginController = async (req,res,next)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username}).select('+password');
    if(!user || !password){
        return next(new errorHandler(400,"user not found"))
    }
    try {
        if(!user.comparePassword(password)){
            return next(new errorHandler(400,"username or password mismatch"))
        }
        sendToken(res,user);

    } catch (error) {
        console.log(error)
        return next(error)
    }
}
const authorization = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new errorHandler(401, "Login first to access this resource"));
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        return next(new errorHandler(401, "Invalid or Expired Token"));
    }
}
const getUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return next(new errorHandler(404, "User not found"));
        }

        res.status(200).json({
            success: true,
            user: {
                username: user.username,
                email: user.email,
                createdAt: user.createdAt,
            },
        });
    } catch (error) {
        return next(error);
    }
};
export {registerController , loginController , authorization,getUserProfile}