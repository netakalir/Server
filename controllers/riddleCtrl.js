import {
    getAllRiddlesDAL,
    createRiddleDAL,
    updateRiddleDAL,
    deleteRiddleDAL,
    getRiddleByIdDAL
} from "../DAL/mongoDal.js"

export async function getAllRiddles(req, res) {
    try {
        const result = await getAllRiddlesDAL()
        res.json({ msg: "--- all riddles ---", riddles:result })
    } catch (error) {
        res.status(404).json({ msg: "Err: riddles not found", error: error.message })
    }
}

export async function createRiddle(req, res) {
    try {
        const { name, taskDescription, correctAnswer } = req.body
        const riddle = await createRiddleDAL({
            name, taskDescription, correctAnswer
        })
        res.json({ msg: "--- riddle created ---" }, riddle)
    } catch (error) {
        res.ststus(500).json({ msg: "Err: Failed to create riddle", error: error.message })
    }
}

export async function updateRiddle(req, res) {
    try {
        const riddle = await getRiddleByIdDAL(req.params.id)
        await updateRiddleDAL(riddle._id,req.body)
        res.json({ msg: "--- riddle updated ---" })
    } catch (error) {
        res.status(500).json({ msg: "Failed to update riddle", error: error.message });
    }
}

export async function deleteRiddle(req, res) {
    try {
        const riddle = await getRiddleByIdDAL(req.params.id)
        await deleteRiddleDAL(riddle._id)
        res.json({ msg: "--- riddle delete ---" })
    } catch (error) {
        res.status(500).json({ msg: "Failed to delelte riddle", error: error.message });
    }
}