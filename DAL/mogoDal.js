import { ObjectId } from "mongodb";
import {connect} from "../dbConfig.js"

export async function getAllRiddles() {
    const DB = await connect()
    return await DB.collection("riddles").find().toArray()
}

export async function createRiddle(riddle) {
    const DB = await connect()
    const result = await DB.collection("riddles").insertOne(riddle)
    return result
}

export async function updateRiddle(id,newData) {
    const DB = await connect()
    const result = await DB.collection("riddles").updateOne({_id: new ObjectId(id)},{$set:newData})
    return result
}

export async function deleteRiddle(id) {
    const DB = await connect()
    const result = await DB.collection("riddles").deleteOne({_id: new ObjectId(id)})
}


// export async function name(params) {
    
// }

// export async function name(params) {
    
// }