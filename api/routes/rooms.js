import express from "express";
import { createRoom, deleteeRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import {verifyAdmin} from "../utils/verifyToken.js";


const router = express.Router();



//Create
router.post("/:hotelid", verifyAdmin ,createRoom);


//UPDATE

//put method used for de
///:id request param
router.put("/:id", verifyAdmin ,updateRoom); 


//DELETE

router.delete("/:id/:hotelid", verifyAdmin ,deleteeRoom);

//GET

router.get("/:id", getRoom);


//GET All
//no id required as it gets all the items 
router.get("/",getRooms);


export default router