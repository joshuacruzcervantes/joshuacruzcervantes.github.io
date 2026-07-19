/**
 * /aclc — IAS2 live phishing demo (Jul 20, "Why Information Security Matters").
 * -----------------------------------------------------------------------------
 * Deliberately NOT linked from the site nav and marked noindex, so it's only
 * ever reached by whoever's given the direct URL in class. See
 * components/PhishingDemo.tsx for the actual login → GOTCHA flow; it makes
 * zero network requests, so there's nothing here for a crawler or a server to
 * log even if this did get indexed.
 */
import type { Metadata } from "next";
import PhishingDemo from "@/components/PhishingDemo";

export const metadata: Metadata = {
  title: "ACLC Student Portal",
  description: "Sign in to your student account.",
  robots: { index: false, follow: false },
};

export default function AclcPage() {
  return <PhishingDemo />;
}
