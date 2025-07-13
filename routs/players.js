import express from "express";
import { 
    getAllPlayers,
    recordTime
 } from "../controllers/playerCtrl.js";



 const router = express.Router()//יצירת ראוטר שמקבל נתיבים מקומיים

 router.get("/getAllplayers",getAllPlayers)//שליפה של כל השחקנים
 router.put("/recordTime/:id",recordTime)//עדכון על ידי מזהה שחקן קיים

 export default router