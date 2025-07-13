import { readDBPlayers, writeDBPlayers } from "../DAL/fs.dal.js";

export async function getAllPlayers(req, res) {
    try {
        const players = await readDBPlayers()
        res.json({ msg: "--- all players ---", players })
    } catch (error) {
        res.status(500).json({ msg: "Failed to read players", error: error.message });
    }
}

export async function recordTime(req, res) {
  const players = await readDBPlayers();
  const playerId = parseInt(req.params.id);

  const playerIndex = players.findIndex(p => p.id === playerId);

  // בדיקה אם השחקן קיים
  if (playerIndex === -1) {
    return res.status(404).json({ msg: "player not found" });
  }

  // ודא שקיים שדה times שהוא מערך
  if (!Array.isArray(players[playerIndex].times)) {
    players[playerIndex].times = [];
  }

  // דחיפת זמן חדש
  players[playerIndex].times.push(req.body.seconds);

  await writeDBPlayers(players);

  res.json({ msg: "player updated", newPlayer: players[playerIndex] });
}
