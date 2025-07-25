import riddleRouter from "./riddles.js"
import playerRouter from "./players.js"

export default function (app) {
    app.use("/riddles", riddleRouter)//כל הבקשות שיעברו בניתוב הזה יועברו לטיפול בקובץ המתקבל
    app.use("/players", playerRouter)
    app.use((req, res) => {//שגיאה אם לא נמצא אף route שיכול להכיל את הבקשה
        res.status(404).json({ msg: "route not found" })
    })
}