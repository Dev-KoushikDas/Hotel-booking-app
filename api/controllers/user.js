import User from "../models/Hotel.js";

export const createUser = async (req,res,next)=>{
 
    const newUser = new User(req.body)
    
    
    
    try{
    const  savedUser = await newUser.save();
    res.status(200).json(savedUser);

    }catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
    next(err);    
}

}

export const updateUser = async (req,res,next)=>{
 
    try{
        //this will be returned
        const  updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        // after finding the id req.body updates the change
        { $set: req.body },
        //findbyid and update method finds the id  updates it but it returns the previous doucument 
        //so new true function is to return the new updated document
        { new : true }
        )
        //if find and update succesfull return this
    
        res.status(200).json(updatedUser);
    
        }catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
    next(err);    
}

}

export const deleteeUser = async (req,res,next)=>{
 
    try{
        await User.findByIdAndDelete(
        req.params.id
        );
        //nothing to return print this string
        res.status(200).json("User has been deleted.");
    
        }catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
    next(err);    
}

}

export const getUser = async (req,res,next)=>{
 
    try{
        const hotel = await User.findById(
        req.params.id
        );
        //succesfull return hotel 
        res.status(200).json(user);
    
        } 
        catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
    next(err);    
}

}

export const getUsers = async (req,res,next)=>{
 
    try{
        // find is used to find all the items in the list
        const hotels = await User.find();
        //succesfull return hotel 
        res.status(200).json(users);
    
        } 
    catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
    next(err);    
}

}