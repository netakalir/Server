import { ObjectId } from "mongodb";
import {connect} from "../DB/ConfigMongoDb.js"

// retrieves all riddles from MongoDB collection
export async function getAllRiddlesDAL() {
    const DB = await connect()
    return await DB.collection("riddles").find().toArray()
}

// inserts a new riddle into database
export async function createRiddleDAL(riddle) {
    const DB = await connect()
    const result = await DB.collection("riddles").insertOne(riddle)
    return result
}

// updates a riddle by ID with new data
export async function updateRiddleDAL(id,newData) {
    const DB = await connect()
    const result = await DB.collection("riddles").updateOne({_id: new ObjectId(id)},{$set:newData})
    return result
}

// deletes a riddle by ID from database
export async function deleteRiddleDAL(id) {
    const DB = await connect()
    const result = await DB.collection("riddles").deleteOne({_id: new ObjectId(id)})
}

// finds and returns a riddle by ID
export async function getRiddleByIdDAL(id) {
    const DB = await connect()
    const result = await DB.collection("riddles").findOne({_id: new ObjectId(id)})
    return result
}

