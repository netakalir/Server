import express from "express";
import {
    getAllPlayers,
    recordTime,
    getPlayer,
    getBestTime
} from "../controllers/playerCtrl.js";

const router = express.Router()//יצירת ראוטר שמקבל נתיבים מקומיים

router.get("/getAllplayers", getAllPlayers)//שליפה של כל השחקנים
router.put("/:id/recordTime", recordTime)//עדכון על ידי מזהה שחקן קיים
router.post("/getPlayer/:playerName",getPlayer)
router.get("/getBestPlayer",getBestTime)

export default router