import { config } from 'dotenv';
import { MongoClient, Db } from 'mongodb';

config();

const client = new MongoClient(process.env.DB_CONNECTION);

/**
 * @type {Db | null}
 */
let db = null;

/**
 * @returns {Promise<Db>}
 */
export async function connect() {
    if (!db) {
        await client.connect();
        db = client.db("riddleGame");
        console.log("Connected to MongoDB");
    }
    return db;
}