import { readDBFile, writeDBFile } from "./DAL/fs.dal.js";
import fs from "fs/promises";
const DbPath = "./DB/riddles.txt";

//קוראת את הקובץ ומחזירה אותו כמחרוזת
export async function getReaddlesDB() {//פונקציה שמחזירה את התוכן של הקובץ כמחרוזת
    const data = await fs.readFile(DbPath, "utf-8")
    return data
}

//מוחקת חידה ומעדכנת את הקובץ בתוכן החדש
export async function deleteRiddle(id) {
    const riddles = await readDBFile();
    const originalLength = riddles.length;//כלי עזר לבדיקה עם המערך שונה
    const updatedRiddles = riddles.filter(r => r.id !== id)//פילטור של המערך שמחזיר את המערך ללא החידה בעלת המזהה המתקבל
    if (updatedRiddles.length === originalLength) {
        console.log("riddle not deletied");
        return;
    }
    await writeDBFile(updatedRiddles)//פעולת המחיקה בפועל
    console.log("riddle deletied ssucsffuly");
}

//מוחקת חידה ומעדכנת את הקובץ בתוכן החדש
export async function updateRiddle(riddle) {
    const riddles = await readDBFile();//קבלת החידות
    console.log(riddles);
    try {
        const index = riddles.findIndex(r => r.id === riddle.id)//חיפוש האם החידה הזו קיימת במערך
        if (index === -1){
            console.log("riddle not found");
            return false;
        }
        riddles[index].taskDescription = riddle.taskDescription;//השמה חדשה לתיאור החידה
        riddles[index].correctAnswer = riddle.correctAnswer;//השמה חדשה לתשובה החדשה
        writeDBFile(riddles)//עדכון בסיס הנתונים בפועל
    }
    catch (err) {
        console.log(err);
    }
}

