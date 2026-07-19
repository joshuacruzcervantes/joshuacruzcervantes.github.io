/**
 * Shared "capture" bridge between the /aclc phishing demo and its /aclc/admin
 * dashboard. There is no backend anywhere on this site, so the capture list
 * itself is just localStorage — it only syncs between tabs open in the SAME
 * browser (e.g. two tabs on the laptop you're projecting from). It cannot
 * sync across two different physical devices; that would require a real
 * server.
 *
 * IP/location/ISP are faked (see `fakeGeo()` below), not looked up for real —
 * there is NO network request anywhere in this demo. Location is pinned to
 * Baliuag, Bulacan since that's where the whole class actually is; IP and
 * ISP are randomized per submission just for visual variety on the
 * dashboard.
 */
export const ACLC_CAPTURE_KEY = "aclc-demo-captures";

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

export function readCaptures(): AclcCapture[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(ACLC_CAPTURE_KEY);
    return raw ? (JSON.parse(raw) as AclcCapture[]) : [];
  } catch {
    return [];
  }
}

export function appendCapture(capture: Omit<AclcCapture, "id">) {
  if (typeof window === "undefined") return;
  try {
    const existing = readCaptures();
    const entry: AclcCapture = { ...capture, id: makeId() };
    window.localStorage.setItem(
      ACLC_CAPTURE_KEY,
      JSON.stringify([entry, ...existing])
    );
  } catch {
    // Ignore (e.g. private-browsing storage restrictions).
  }
}

export function clearCaptures() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(ACLC_CAPTURE_KEY);
  } catch {
    // Ignore.
  }
}

function makeId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
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
 * Fake IP + ISP, real (fixed) location. There is no backend and no network
 * request here — location is pinned to Baliuag, Bulacan since that's where
 * the whole class physically is, and the IP/ISP are randomized so the
 * dashboard doesn't show identical rows for every capture.
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
