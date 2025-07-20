import riddleRouter from "./riddles.js"
import playerRouter from "./players.js"

// configures all application routes
export default function (app) {
    app.use("/riddles", riddleRouter) // routes riddle requests to riddle router
    app.use("/players", playerRouter) // routes player requests to player router
    app.use((req, res) => { // error if no matching route found
        res.status(404).json({ msg: "route not found" })
    })
}