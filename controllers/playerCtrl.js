import {
    getAllPlayersDal,
    recordTimeDal,
    createPlayerDal,
    getPlayerByNameDal
} from "../DAL/supabaseDal.js";

export async function getAllPlayers(req, res) {
    try {
        const players = await getAllPlayersDal()
        res.json({ msg: "--- all players ---", players })
    } catch (error) {
        res.status(500).json({ msg: "Failed to read players", error: error.message });
    }
}

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

export async function recordTime(req, res) {
    try {
        const time =  await recordTimeDal(req.params.id, req.body.times)
        res.json({ msg: "--- updated time ---" },time)
    } catch (error) {
        res.status(500).json({ msg: "Failed to updated time", error: error.message });
    }
}

