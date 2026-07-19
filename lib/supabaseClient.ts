/**
 * Supabase client for the /aclc phishing demo (see lib/aclcCapture.ts).
 *
 * This key is Supabase's "anon"/"publishable" key — it's meant to be public
 * and shipped in client JS (same trust level as ADMIN_PASSCODE in
 * PhishingAdminDashboard.tsx). Access control lives in the database's Row
 * Level Security policies on the aclc_captures table, not in secrecy of this
 * key. The site is a static export (next.config.mjs -> output: "export")
 * with no server, so there's nowhere to hide a "real" secret anyway.
 */
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://phidjrtayiueyfsqaimx.supabase.co";
const SUPABASE_ANON_KEY =
  "sb_publishable_bAK1kBu2O9caLWbwrIrH6w_jXBnimC_";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
