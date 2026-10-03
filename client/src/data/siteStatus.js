/**
 * SITE STATUS CONFIG
 * ──────────────────
 * Change `status` to control the footer badge:
 *
 *   "active"       → 🟢 green  "Site Active"
 *   "maintenance"  → 🔴 red    "Under Maintenance"
 *   "coming-soon"  → 🟡 amber  "Coming Soon"
 */

export const siteStatus = {
  status: "active",   // ← change this line only

  labels: {
    active:       { en: "Site Active",       hi: "साइट सक्रिय",       color: "#22c55e", bg: "rgba(34,197,94,0.12)",  border: "rgba(34,197,94,0.3)"  },
    maintenance:  { en: "Under Maintenance", hi: "रखरखाव जारी है",    color: "#ef4444", bg: "rgba(239,68,68,0.12)",  border: "rgba(239,68,68,0.3)"  },
    "coming-soon":{ en: "Coming Soon",       hi: "शीघ्र आ रहा है",    color: "#f59e0b", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)" },
  },
};
