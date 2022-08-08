import mongoose from 'mongoose';
 
// for schema in mongoose
//const {Schema} = mongoose;
//we dont need this now cause mongoose.schema takes care of that for now
const UserSchema = new mongoose.Schema({
    username:{
       type:String,
       required:true,
       unique:true
    },
    email:{
    type:String,
    required:true,
    unique:true
    },
    password:{
       type:String,
       required:true
   },
    isAdmin:{
       type:Boolean,
       default:false,
   },
   

},{timestamps:true});

//export schema model Hotel is file name hotelSchema is the file name from which 
//const is made

export default mongoose.model("User",UserSchema)