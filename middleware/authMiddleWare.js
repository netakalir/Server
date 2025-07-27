import {
    verifyToken,
} from "../utils/authUtils.js";

export function authenticatePlayer(allowedRoles) {//פונקציה שתקבל מערך של שחקנים מורשים ותפקידה יהיה לאמת אותם
    return async (req, res, next) => {
        try {
            const authHeader = req.headers["authorization"];
            const token = authHeader && authHeader.split(" ")[1]; 

            if (!token) {
                return res.status(401).json({ error: "no token provided" });//בדיקה אם קיים טוקן
            }

            const player = await verifyToken(token);//שליחה לפונקציה שתאמת את הטוקן
            console.log("player:>",player);

            if (!player) {
                return res.status(401).json({ error: "invalid or expired token" });//תגובה אם הטוקן לא מאושר
            }

            if (!allowedRoles.includes(player.role)) {
                return res.status(403).json({ error: "insufficient permissions" });//תגובה אם השחקן לא מורשה לפעולה הבאה
            }

            req.player = player;//שמירת המידע בשביל להעביר אותו לפעולה הבאה בEND POINT

            next();

        } catch (error) {
            return res.status(500).json({ error: "authentication error" });
        }
    };
}

