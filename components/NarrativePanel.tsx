export function NarrativePanel({ summary, caveats }: { summary: string; caveats: string[] }) {
  return (
    <div className="card p-5">
      <h3 className="mb-2 text-sm font-semibold">Interpretation</h3>
      <p className="text-sm text-steel">{summary}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate">
        {caveats.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
