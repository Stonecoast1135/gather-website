// Signup availability was verified against the live registration flow on September 24, 2026.
// Change the ID to announce a new campaign; disable to remove the automatic announcement.
export const launchCampaign = {
  enabled: true,
  id: "student-signups-2026-09",
  delayMs: 4_000,
} as const;
export const launchStorageKey = `gather:launch:${launchCampaign.id}`;
const seenCampaigns = new Set<string>();
type CampaignStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">;

function browserStorage(
  name: "localStorage" | "sessionStorage",
): CampaignStorage | null {
  try {
    return typeof window === "undefined" ? null : window[name];
  } catch {
    return null;
  }
}

export function hasSeenLaunchCampaign() {
  if (seenCampaigns.has(launchStorageKey)) return true;
  for (const name of ["localStorage", "sessionStorage"] as const) {
    try {
      if (browserStorage(name)?.getItem(launchStorageKey)) {
        seenCampaigns.add(launchStorageKey);
        return true;
      }
    } catch {
      /* A denied read must still allow the session and in-memory fallbacks. */
    }
  }
  return false;
}

export function rememberLaunchCampaign(
  state: "seen" | "dismissed" = "dismissed",
) {
  seenCampaigns.add(launchStorageKey);
  for (const name of ["localStorage", "sessionStorage"] as const) {
    try {
      const storage = browserStorage(name);
      if (storage) {
        storage.setItem(launchStorageKey, state);
        if (storage.getItem(launchStorageKey) === state) return true;
      }
    } catch {
      /* Keep the memory guard while checking the session-storage fallback. */
    }
  }
  return false;
}

export function resetLaunchCampaign() {
  seenCampaigns.delete(launchStorageKey);
  for (const name of ["localStorage", "sessionStorage"] as const) {
    try {
      browserStorage(name)?.removeItem(launchStorageKey);
    } catch {
      /* Memory reset remains available. */
    }
  }
}
