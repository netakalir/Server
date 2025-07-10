import { readDBFile,writeDBFile } from "../DAL/fs.dal.js";

export async function getAllRiddles(req, res) {
    try {
        const riddles = await readDBFile()
        res.json({ msg: "--- all riddles ---", riddles })
    } catch (error) {
        res.status(500).json({ msg: "Failed to read riddles", error: error.message });
    }
}

export async function createRiddle(req, res) {
    const riddles = await readDBFile();
    const newRiddle = { id: Date.now(), name: req.body.name, taskDescription: req.body.taskDescription, correctAnswer: req.body.correctAnswer }
    riddles.push(newRiddle)
    await writeDBFile(riddles);
    res.status(201).json({ msg: "new riddle added", riddle: newRiddle });
}

export async function updateriddle(req, res) {
    const riddles = await readDBFile();
    const riddleId = parseInt(req.params.id)
    const riddleIndex = riddles.findIndex(r => r.id === riddleId)
    if (riddleIndex) {
        riddles.splice(riddleIndex, 1)
        const newRiddle = { id: riddleId, name: req.body.name, taskDescription: req.body.taskDescription, correctAnswer: req.body.correctAnswer }
        riddles.push(newRiddle)
        await writeDBFile(riddles)
        res.json({ msg: "riddle updated", newRiddle })
    }
    else{
        res.status(404).json({ msg: "riddle not found" })
    }
}

export async function deleteriddle(req,res) {
    const riddles = await readDBFile();
    const riddleId = parseInt(req.params.id)
    const riddleIndex = riddles.findIndex(r => r.id === riddleId)
    if(riddleIndex !== -1){
        riddles.splice(riddleIndex, 1)
        await writeDBFile(riddles)
        res.json({ msg: "riddle deleted successfully" })
    }
    else{
        res.status(404).json({ msg: "riddle not found" })
    }
}