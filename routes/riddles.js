import express from "express";
import { 
    getAllRiddles,
    createRiddle,
    updateRiddle,
    deleteRiddle

 } from "../controllers/riddleCtrl.js";

 const router = express.Router() // creates router for local routes

 router.get("/getAllRiddle",getAllRiddles) // get all riddles
 router.post("/createRiddle",createRiddle) // create new riddle
 router.put("/updateRiddle/:id",updateRiddle) // update existing riddle by ID
 router.delete("/deleteRiddle/:id",deleteRiddle) // delete riddle by ID
 
 
 export default router