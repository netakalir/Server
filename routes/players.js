import express from "express";
import {
    getAllPlayers,
    recordTime,
    getPlayer,
    getBestTime
} from "../controllers/playerCtrl.js";

const router = express.Router() // creates router for local routes

router.get("/getAllplayers", getAllPlayers) // get all players
router.put("/:id/recordTime", recordTime) // update by existing player ID
router.get("/getPlayer/:playerName",getPlayer) // get or create player by name
router.get("/getBestPlayer",getBestTime) // get best player time

export default router