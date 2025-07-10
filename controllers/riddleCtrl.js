import { readDBFile,writeDBFile } from "../DAL/fs.dal"

export async function getAllRiddles(req,res){
    try {
        const riddles = await readDBFile()
        res.json({msg:"--- all riddles ---", riddles})
    } catch (error) {
        res.status(500).json({ msg: "Failed to read riddles", error: err.message });
    }
}

export function createRiddle(){
    
}

export function updateriddle(){

}

export function deleteriddle(){
    
}