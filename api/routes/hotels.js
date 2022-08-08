import express from "express";
import { countByCity, createHotel, deleteeHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE 
//post method used for creating

     
     
   // moved to hotel.js 
    /*router.post*/
   //("/",async(req,res)=>{
   /* const newHotel = new Hotel(req.body)
    
    
    
    try{
    const  savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)

    }catch(err){
    //if ther is error 500-> this is server error
    res.status(500).json(err)
    }

    */

//})

//so we call creaateHotel from here

router.post("/", verifyAdmin ,createHotel);


//UPDATE

//put method used for de
///:id request param
router.put("/:id", verifyAdmin ,updateHotel);


//DELETE

router.delete("/:id", verifyAdmin ,deleteeHotel);

//GET

router.get("/find/:id", getHotel);


//GET All
//no id required as it gets all the items 
router.get("/",getHotels);


router.get("/countByCity",countByCity);
router.get("/countByType",getHotels);



export default router;