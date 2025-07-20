import {
    getAllPlayersDal,
    recordTimeDal,
    createPlayerDal,
    getPlayerByNameDal,
    getTimes
} from "../DAL/supabaseDal.js";

// returns all players from database
export async function getAllPlayers(req, res) {
    try {
        const players = await getAllPlayersDal()
        res.json({ msg: "--- all players ---", players })
    } catch (error) {
        res.status(500).json({ msg: "Failed to read players", error: error.message });
    }
}

// creates new player or returns existing one
export async function getPlayer(req, res) {
    try {
        const player = {
            name: req.params.playerName,
            times: []
        }
        const isExist = await getPlayerByNameDal(req.params.playerName);
        if (!isExist?.code) {
            res.json({ msg: "player allready exsist", newPlayer: isExist })
        }
        else {
            const newPlayer = await createPlayerDal(player)
            res.json({ msg: "player created", newPlayer })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error })
    }
}

// records completion time for a player
export async function recordTime(req, res) {
    try {
        const time = await recordTimeDal(req.params.id, req.body.times)
        res.json({ msg: "--- updated time ---" }, time)
    } catch (error) {
        res.status(500).json({ msg: "Failed to updated time", error: error.message });
    }
}

// calculates and returns the best player time
export async function getBestTime(req, res) {
    try {
        const result = await getTimes()
        let min = result[0].times;
        let name = result[0].name;
        for (let i = 1; i < result.length; i++) {
            if (result[i].times < min) {
                min = result[i].times
                name = result[i].name
            }
        }
        let bestTime = min.reduce((sum, current) => sum + current, 0);
        res.json({ msg: `the best player is: ${name} and total time is: ${bestTime}` })

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "faild to calculate times", error: error.message })
    }
}

