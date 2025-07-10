import express from "express";
import configRoutes from "./routes/configRoutes.js";

const app = express()
app.use(express.json())//אפשרות לשרת לפרש את גוף הבקשה
configRoutes(app)

app.listen(3005,()=>{//הפעלת השרת
    console.log("listening on port 3005");
})