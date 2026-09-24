// Signup availability was verified against the live registration flow on September 24, 2026.
// Change the ID to announce a new campaign; disable to remove the automatic announcement.
export const launchCampaign = {
  enabled: true,
  id: "student-signups-2026-09",
  delayMs: 4_000,
} as const;
export const launchStorageKey = `gather:launch:${launchCampaign.id}`;
const dismissedCampaigns = new Set<string>();
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

export function hasDismissedLaunchCampaign() {
  if (dismissedCampaigns.has(launchStorageKey)) return true;
  for (const name of ["localStorage", "sessionStorage"] as const) {
    try {
      // Earlier builds wrote "seen" before opening. Display is not dismissal;
      // retain that value untouched until the visitor makes an intentional choice.
      if (browserStorage(name)?.getItem(launchStorageKey) === "dismissed") {
        dismissedCampaigns.add(launchStorageKey);
        return true;
      }
    } catch {
      /* A denied read must still allow the session and in-memory fallbacks. */
    }
  }
  return false;
}

/** Check that a future dismissal can persist without marking the campaign seen. */
export function canPersistLaunchDismissal() {
  const probeKey = `${launchStorageKey}:storage-check`;
  for (const name of ["localStorage", "sessionStorage"] as const) {
    try {
      const storage = browserStorage(name);
      if (!storage) continue;
      const previous = storage.getItem(probeKey);
      try {
        storage.setItem(probeKey, "available");
        if (storage.getItem(probeKey) === "available") return true;
      } finally {
        if (previous === null) storage.removeItem(probeKey);
        else storage.setItem(probeKey, previous);
      }
    } catch {
      /* Try session storage when local storage is unavailable or read-only. */
    }
  }
  return false;
}

/** Called only by an explicit dismiss action, never by display or effect cleanup. */
export function rememberLaunchDismissal() {
  dismissedCampaigns.add(launchStorageKey);
  for (const name of ["localStorage", "sessionStorage"] as const) {
    try {
      const storage = browserStorage(name);
      if (storage) {
        storage.setItem(launchStorageKey, "dismissed");
        if (storage.getItem(launchStorageKey) === "dismissed") return true;
      }
    } catch {
      /* Keep the memory guard while checking the session-storage fallback. */
    }
  }
  return false;
}

export function resetLaunchCampaign() {
  dismissedCampaigns.delete(launchStorageKey);
  for (const name of ["localStorage", "sessionStorage"] as const) {
    try {
      browserStorage(name)?.removeItem(launchStorageKey);
    } catch {
      /* Memory reset remains available. */
    }
  }
}
