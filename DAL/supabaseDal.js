import { supabase } from "../DB/configSupabaseDb.js";

export async function getAllPlayersDal() {
    const { data, error } = await supabase
        .from("players")
        .select("*")

    if (error) {
        throw error
    }
    return data
}

export async function getPlayerByNameDal(playerName) {
    const { data, error } = await supabase
        .from("players")
        .select("*")
        .eq("name", playerName)
        .single()
    if (error) {
        return error;
    }
    return data
}

export async function createPlayerDal(player) {
    const { data, error } = await supabase
        .from("players")
        .insert([player])
        .select("*")
        .single()
    if (error) {
        throw error
    }
    return data
}

export async function getPlayerByID(id) {
    const { data, error } = await supabase
        .from("players")
        .select("*")
        .eq("id", id)
        .single();
    if (error) {
        throw error
    }
    return data
}

export async function recordTimeDal(id, seconds) {
    const player = await getPlayerByID(id);
    player.times.push(Number(seconds));
    const { data, error } = await supabase
        .from("players")
        .update({ times: player.times })
        .eq("id", id)
    if (error) {
        throw error
    }
    return data
}
export async function getTimes() {
    const { data, error } = await supabase
        .from("players")
        .select("name,times")

    if (error) {
        console.log(error);
    }
    return data
}
