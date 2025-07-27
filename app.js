import express from "express";
import configRoutes from "./routes/configRoutes.js";

const app = express()
app.use(express.json()) // enable server to parse request body

configRoutes(app)

app.listen(3005, () => { // start the server
    console.log("listening on port 3005");
})