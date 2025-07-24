import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { config } from 'dotenv';


export async function hashPassword(password) {
    let hashPassword;
    try {
        hashPassword = await bcrypt.hash(password, 10)
        console.log("hashPassword",hashPassword);
    } catch (error) {
        console.log({ msg: "cannt hashPassword ", error });
    }
    return hashPassword;
}

export async function verifyPassword(password, hash) {
    try {
        const status = bcrypt.compare(password, hash)
        if (!status) {
            return false
        }
        return true
    } catch (error) {
        console.log(error);
    }
}

export function generateToken(player) {
    try {
        const token = jwt.sign(
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
    }

}

export function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        return null;
    }
}
