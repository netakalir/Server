import fs from "fs/promises";
import path from "path";
const DbPath = path.resolve("DB", "riddles.txt");
const DbPlayerPath = path.resolve("DB", "players.txt");

//קריאה מקובץ חידות מחזירה JSON
export async function readDBFile() {
    try {
        const data = await fs.readFile(DbPath,"utf-8");
        return JSON.parse(data)
    } catch (error) {
        console.log(error);
    }
}
//כתיבה לקובץ חידות ממירה למחרוזת JSON וכותבת לקובץ טקטס
export async function writeDBFile(data) {
    try {
        const riddles = JSON.stringify(data,null,2)
        await fs.writeFile(DbPath,riddles,"utf-8")
    } catch (error) {
        console.log(error);
    }
}

//קריאה מקובץ שחקנים מחזירה JSON
export async function readDBPlayers(){
    try {
        const data = await fs.readFile(DbPlayerPath,"utf-8")
        return JSON.parse(data)
    } catch (error) {
        console.log(error);
    }
}

//כתיבה לקובץ שחקנים ממירה למחרוזת JSON וכותבת לקובץ טקטס
export async function writeDBPlayers(data){
    try {
        const players = JSON.stringify(data,null,2)
        await fs.writeFile(DbPath,players,"utf-8")
    } catch (error) {
        console.log(error);
    }
}