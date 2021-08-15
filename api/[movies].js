import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ijakzebeouyiwptyhyea.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = async (req, res) => {
    try {
        let { data: movies } = await supabase.from("movie").select("*");
        res.send(JSON.stringify(movies));
    } catch (error) {
        res.send(JSON.stringify(error));
    }
};
