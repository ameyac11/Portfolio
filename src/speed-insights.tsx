import { SpeedInsights } from "@vercel/speed-insights/react";

export default function SpeedInsightsWrapper() {
  if (import.meta.env.MODE !== "production") return null;
  return <SpeedInsights />;
}
