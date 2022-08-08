import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";

export const createRoom = async (req,res,next) =>{

const hotelId = req.params.hotelid;
const newRoom = new Room(req.body);


try{
    const savedRoom = await newRoom.save();

    try{
        await Hotel.findByIdAndUpdate(hotelId, {
            $push: {rooms: savedRoom._id},
              });
    }   catch (err) {
        next(err);
    }
    res.status(200).json(savedRoom);
    }catch(err){
    next(err);
}

};




export const updateRoom = async (req,res,next)=>{
 
    try{
        //this will be returned
        const  updatedRoom = await Hotel.findByIdAndUpdate(
        req.params.id,
        // after finding the id req.body updates the change
        { $set: req.body },
        //findbyid and update method finds the id  updates it but it returns the previous doucument 
        //so new true function is to return the new updated document
        { new : true }
        )
        //if find and update succesfull return this
    
        res.status(200).json(updatedRoom);
    
        }catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
    next(err);    
}

}

export const deleteeRoom = async (req,res,next)=>{
    const hotelId = req.params.hotelid;
    try{
        await Room.findByIdAndDelete(
        req.params.id
        );

        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: {rooms: req.params.id},
            });
        }  catch (err) {
           next(err);
        }


        //nothing to return print this string
        res.status(200).json("Room has been deleted.");
    
        }catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
        next(err);    
        }

}

export const getRoom = async (req,res,next)=>{
 
    try{
        const room = await Room.findById(
        req.params.id
        );
        //succesfull return hotel 
        res.status(200).json(room);
    
        } 
        catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
    next(err);    
}

}

export const getRooms = async (req,res,next)=>{
 
    try{
        // find is used to find all the items in the list
        const rooms = await Room.find();
        //succesfull return hotel 
        res.status(200).json(rooms);
    
        } 
    catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
    next(err);    
}

}