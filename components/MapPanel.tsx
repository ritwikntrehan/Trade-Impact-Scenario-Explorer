import type { USRegion } from "@/lib/types";

export function MapPanel({ regions }: { regions: USRegion[] }) {
  return (
    <div className="card p-5">
      <h3 className="mb-3 text-sm font-semibold">U.S. geographic relevance (highlight panel)</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {regions.map((r) => (
          <div key={r.id} className="rounded border border-slate-200 p-3">
            <p className="text-sm font-medium">{r.name}</p>
            <p className="text-xs text-slate">{r.type}</p>
            <p className="mt-2 text-xs text-steel">{r.relevanceNote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
