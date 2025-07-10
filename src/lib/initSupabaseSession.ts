import { getSession } from "next-auth/react";
import { supabase } from "./supabaseClient";

export const initSupabaseSession = async () => {
  const session = await getSession();

  const access_token = session?.accessToken;
  const refresh_token = session?.refreshToken;

  if (access_token && refresh_token) {
    const { error } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    });

    if (error) {
      console.error("❌ Errore impostando la sessione Supabase:", error.message);
    } else {
      console.log("✅ Supabase JWT impostato correttamente");
    }
  } else {
    console.warn("⚠️ Token mancanti per impostare sessione Supabase");
  }
};
