import { hashPassword, generateToken, verifyPassword } from "../utils/authUtils.js";
import { getPlayerByNameDal, createPlayerDal } from "../DAL/supabaseDal.js";

export async function register(req, res) {//פונקציית התחברות
    try {
        const { name, password } = req.body//שליפת נתונים מגוף הבקשה
        const existingPlayer = await getPlayerByNameDal(name);
        if (existingPlayer) {
            return res.status(400).json("player already exists");
        }//בדיקה אם לא קיים כזה שחקן
        const hash = await hashPassword(password, 10)//הצפנת הסיסמה שלו
        const newPlayer = {
            name: name,
            password: hash,
            role: "user",
            times: []
        }//יצירת אוביקט השחקן שישלח למסד הנתונים
        const player = await createPlayerDal(newPlayer)
        res.status(201).json({ message: "player created successfully" });
    } catch (error) {
        res.status(401).json({ eroor: "cannot register", error })
    }
}

export async function login(req, res) {//פונקציית התחברות
    try {
        const { name, password } = req.body//שליפת נתונים מגוף הבקשה
        const player = await getPlayerByNameDal(name);
        if (!player) {
            return res.status(401).json({ error: "player not found" })
        }//בדיקה אם קיים כזה שחקן במסד נתונים

        const isPasseord = await verifyPassword(password, player.password)
        if (!isPasseord) {
            return res.status(401).json({ error: "unconfirmed password" })
        }//אימות הסיסמה שלו

        const token = await generateToken(player);

        res
            .header("Authorization", `Bearer ${token}`)
            .status(201)
            .json({
                message: "Login successful",
                token: token,
                player: {
                    id: player.id,
                    name: player.name,
                    role: player.role,
                    times: player.times
                }
            })//create token
    } catch (error) {
        res.status(500).json({ error: "Server return error during login" });
    }
}