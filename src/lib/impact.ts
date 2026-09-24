/** Public, aggregate-only boundary. No approved live reporting source is connected. */
export type ImpactTotals = {
  foodRescuedLb: number | null;
  rescuesCompleted: number | null;
  volunteerHours: number | null;
};
export const unavailableImpact: ImpactTotals = {
  foodRescuedLb: null,
  rescuesCompleted: null,
  volunteerHours: null,
};
export function parseImpact(value: unknown): ImpactTotals {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return { ...unavailableImpact };
  const data = value as Record<string, unknown>;
  // Reject unexpected fields so private records cannot leak through an aggregate adapter.
  if (Object.keys(data).some((key) => !(key in unavailableImpact)))
    return { ...unavailableImpact };
  const valid = (v: unknown, integer = false) =>
    typeof v === "number" &&
    Number.isFinite(v) &&
    v >= 0 &&
    (!integer || Number.isInteger(v))
      ? v
      : null;
  return {
    foodRescuedLb: valid(data.foodRescuedLb),
    rescuesCompleted: valid(data.rescuesCompleted, true),
    volunteerHours: valid(data.volunteerHours),
  };
}
export async function getImpactTotals(
  source?: () => Promise<unknown>,
): Promise<ImpactTotals> {
  if (!source) return { ...unavailableImpact };
  try {
    return parseImpact(await source());
  } catch {
    return { ...unavailableImpact };
  }
}
export function formatImpact(value: number | null): string {
  return value === null
    ? "--"
    : new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(
        value,
      );
}
