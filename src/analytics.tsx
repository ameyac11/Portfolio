import { Analytics } from "@vercel/analytics/react";

export default function AnalyticsWrapper() {
  if (import.meta.env.MODE !== "production") return null;
  return <Analytics />;
}