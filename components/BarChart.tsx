type Datum = { label: string; value: number };

export function BarChart({ data, title, suffix = "" }: { data: Datum[]; title: string; suffix?: string }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className="card p-5">
      <h3 className="mb-4 text-sm font-semibold text-ink">{title}</h3>
      <div className="space-y-3">
        {data.map((d) => (
          <div key={d.label}>
            <div className="mb-1 flex justify-between text-xs text-steel">
              <span>{d.label}</span>
              <span>
                {d.value}
                {suffix}
              </span>
            </div>
            <div className="h-2 rounded bg-slate-100">
              <div className="h-2 rounded bg-accent" style={{ width: `${(d.value / max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
