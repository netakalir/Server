import express from "express";
import { 
    getAllRiddles,
    createRiddle,
    updateRiddle,
    deleteRiddle

 } from "../controllers/riddleCtrl.js";
 import { authenticatePlayer } from "../middleware/authMiddleWare.js";

 const router = express.Router() // creates router for local routes

 router.get("/getAllRiddle",authenticatePlayer(["admin","user"]),getAllRiddles) // get all riddles
 router.post("/createRiddle",authenticatePlayer(["admin","user"]),createRiddle) // create new riddle
 router.put("/updateRiddle/:id",authenticatePlayer(["admin"]),updateRiddle) // update existing riddle by ID
 router.delete("/deleteRiddle/:id",authenticatePlayer(["admin"]),deleteRiddle) // delete riddle by ID
 
 
 export default router