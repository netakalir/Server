import express from "express";
import { 
    getAllRiddles,
    createRiddle,
    updateRiddle,
    deleteRiddle

 } from "../controllers/riddleCtrl.js";

 const router = express.Router()//יצירת ראוטר שמקבל נתיבים מקומיים

 router.get("/getAllRiddle",getAllRiddles)//שליפה של כל החידות
 router.post("/createRiddle",createRiddle)//יצירת חידה חדשה
 router.put("/updateRiddle/:id",updateRiddle)//עדכון על ידי מזהה חידה קיימת
 router.delete("/deleteRiddle/:id",deleteRiddle)//מחיקת על ידי מזהה חידה קייימת
 
 
 export default router