import { createClient } from "@supabase/supabase-js";
import { getSession } from "next-auth/react";

// Crea l'istanza Supabase
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Imposta la sessione JWT per le operazioni autenticate
export const useSupabaseAuth = async () => {
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
