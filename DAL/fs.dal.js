import fs from "fs/promises";
import path from "path";
const DbPath = path.resolve("DB", "riddles.txt");

//קריאה מקובץ מחזירה JSON
export async function readDBFile() {
    try {
        const data = await fs.readFile(DbPath,"utf-8");
        return JSON.parse(data)
    } catch (error) {
        console.log(error);
    }
}
//כתיבה לקובץ ממירה למחרוזת JSON וכותבת לקובץ טקטס
export async function writeDBFile(data) {
    try {
        const riddles = JSON.stringify(data,null,2)
        await fs.writeFile(DbPath,riddles,"utf-8")
    } catch (error) {
        console.log(error);
    }
}
