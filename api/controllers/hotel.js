import Hotel from "../models/Hotel.js";

export const createHotel = async (req,res,next)=>{
 
    const newHotel = new Hotel(req.body)
     
    try{
    const  savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);

    }catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
    next(err);    
}

}

export const updateHotel = async (req,res,next)=>{
 
    try{
        //this will be returned
        const  updatedHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        // after finding the id req.body updates the change
        { $set: req.body },
        //findbyid and update method finds the id  updates it but it returns the previous doucument 
        //so new true function is to return the new updated document
        { new : true }
        )
        //if find and update succesfull return this
    
        res.status(200).json(updatedHotel);
    
        }catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
    next(err);    
}

}

export const deleteeHotel = async (req,res,next)=>{
 
    try{
        await Hotel.findByIdAndDelete(
        req.params.id
        );
        //nothing to return print this string
        res.status(200).json("Hotel has been deleted.");
    
        }catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
    next(err);    
}

}

export const getHotel = async (req,res,next)=>{
 
    try{
        const hotel = await Hotel.findById(
        req.params.id
        );
        //succesfull return hotel 
        res.status(200).json(hotel);
    
        } 
        catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
    next(err);    
}

}

export const getHotels = async (req,res,next)=>{
 
    try{
        // find is used to find all the items in the list
        const hotels = await Hotel.find();
        //succesfull return hotel 
        res.status(200).json(hotels);
    
    } 
    catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
    next(err);    
}

}


export const countByCity = async (req,res,next)=>{
    //sending query as a string and then receiving the string and making it an array 
    //as we use split method with a comma ...every word seperated by comma will become 
    //a different element in an array........
    const cities = req.query.cities.split(",")
    try{
        // find is used to find all the items in the list
        const list = await Promise.all(cities.map(city=>{
            //countDocument is a method of mongoDB it just gives the count
            return Hotel.countDocuments({city:city})
        }))
        //succesfull return hotel 
        res.status(200).json(list);
    
    } 
    catch(err){
    //if ther is error 500-> this is server error
    //res.status(500).json(err)
    next(err);    
}

}