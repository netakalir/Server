import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { config } from 'dotenv';


export async function hashPassword(password,salt) {
    let hash;
    try {
        hash = await bcrypt.hash(password, salt)
    } catch (error) {
        console.log({ msg: "cannt hashPassword ", error });
    }
    return hash;
}


export async function verifyPassword(password, hash) {
    try {
        const status = await bcrypt.compare(password, hash)
        if (!status) {
            return false
        }
        return true
    } catch (error) {
        console.log(error);
    }
}

export async function generateToken(player) {
    try {
        const token =  jwt.sign(
            {
                name: player.name,
                role: player.role,
                times: player.times
            },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        )
        return token
    } catch (error) {
        console.log(error);
        return null
    }

}

export async function  verifyToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        return null;
    }
}
