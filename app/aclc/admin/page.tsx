/**
 * /aclc/admin — instructor-only view of the /aclc phishing demo capture.
 * Passcode-gated (see ADMIN_PASSCODE in components/PhishingAdminDashboard.tsx),
 * noindex, and not linked from anywhere on the site.
 */
import type { Metadata } from "next";
import PhishingAdminDashboard from "@/components/PhishingAdminDashboard";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AclcAdminPage() {
  return <PhishingAdminDashboard />;
}
