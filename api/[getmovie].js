import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ijakzebeouyiwptyhyea.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = async (req, res) => {
    try {
        const {
            query: { id },
        } = req;
        let { data: movie } = await supabase.from("movie").select("*").eq("id", id);
        res.send(JSON.stringify(movie));
    } catch (error) {
        res.send(JSON.stringify(error));
    }
};
