 import mongoose from 'mongoose';
 
 // for schema in mongoose
 //const {Schema} = mongoose;
//we dont need this now cause mongoose.schema takes care of that for now
 const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    distance:{
        type: String,
        required:true
    },
    photos:{
        /*array of strings*/
        type: [String],
        
    },
    title:{
        type:String,
        required: true,
    },
    desc:{
        /*array of strings*/
        type: String,
        required:true
        
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String],
    },
    cheapestPrice:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,
        default:false,
    },
    

 });

 //export schema model Hotel is file name hotelSchema is the file name from which 
 //const is made

 export default mongoose.model("Hotel",HotelSchema)