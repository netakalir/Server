import { ObjectId } from "mongodb";
import {connect} from "../DB/ConfigMongoDb.js"

export async function getAllRiddlesDAL() {
    const DB = await connect()
    return await DB.collection("riddles").find().toArray()
}

export async function createRiddleDAL(riddle) {
    const DB = await connect()
    const result = await DB.collection("riddles").insertOne(riddle)
    return result
}

export async function updateRiddleDAL(id,newData) {
    const DB = await connect()
    const result = await DB.collection("riddles").updateOne({_id: new ObjectId(id)},{$set:newData})
    return result
}

export async function deleteRiddleDAL(id) {
    const DB = await connect()
    const result = await DB.collection("riddles").deleteOne({_id: new ObjectId(id)})
}


export async function getRiddleByIdDAL(id) {
    const DB = await connect()
    const result = await DB.collection("riddles").findOne({_id: new ObjectId(id)})
    return result
}

