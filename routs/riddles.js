import express from "express";
import { 
    getAllRiddles,
    createRiddle,
    updateriddle,
    deleteriddle

 } from "../controllers/riddleCtrl";

 const router = express.Router()//יצירת ראוטר שמקבל נתיבים מקומיים

 router.get("/getAllRiddle",getAllRiddles)//שליפה של כל החידות
 router.post("/createRiddle",createRiddle)//יצירת חידה חדשה
 router.put("/updateRiddle/:id",updateriddle)//עדכון על ידי מזהה חידה קיימת
 router.delete("/deleteRiddle/:id",deleteriddle)//מחיקת על ידי מזהה חידה קייימת
 
 export default router