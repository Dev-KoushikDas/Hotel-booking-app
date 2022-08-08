import express from "express";
import { updateUser } from "../controllers/user.js";
import { deleteeUser } from "../controllers/user.js";
import { getUser } from "../controllers/user.js";
import { getUsers } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";
import { verifyUser } from "../utils/verifyToken.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{

    res.send("hello user, you are logged in!")

})

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{

    res.send("hello user, you are logged in and you can delete you account")

})


router.get("/checkadmin/:id", verifyAdmin , (req,res,next)=>{

    res.send("hello admin, you are logged in and you can delete all accounts")

})

//UPDATE

router.put("/:id",verifyUser , updateUser);

//DELETE

router.delete("/:id", verifyUser, deleteeUser);

//GET

router.get("/:id", verifyUser, getUser);


//GET All
//no id required as it gets all the items 
router.get("/", verifyAdmin ,getUsers);


export default router;