export default function HowItWorksPage() {
  const sections = [
    ["Source data", "Public trade and industry references are normalized into local sample JSON for this phase-1 prototype."],
    ["Tariff layer", "Scenarios apply user-selected tariff deltas to a baseline exposure profile by country, industry, and product group."],
    ["Industry mapping", "Industry definitions connect product groups, likely risks, and possible substitution pathways."],
    ["Exposure calculation", "First-order exposure combines import/export values and exposure shares; no second-order macro feedback loop is modeled."],
    ["Substitution logic", "Alternative sourcing candidates are ranked by curated capability tags and practical constraints."],
    ["Narrative generation", "Each scenario includes concise interpretation text and caveats to support decision framing."],
    ["Limitations", "Phase 1 uses simplified assumptions and local sample data. This demonstrates architecture, not full equilibrium forecasting."],
  ];

  return (
    <main className="section space-y-6">
      <h1 className="text-3xl font-semibold">How It Works</h1>
      <p className="text-sm text-steel">This site demonstrates the structure of a tariff-impact intelligence layer over public trade data.</p>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map(([title, body]) => (
          <section key={title} className="card p-5">
            <h2 className="font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-steel">{body}</p>
          </section>
        ))}
      </div>

      <section className="card p-5">
        <h2 className="font-semibold">Architecture diagram (phase 1)</h2>
        <div className="mt-4 grid gap-3 text-center text-xs md:grid-cols-5">
          {[
            "Public Trade Inputs",
            "Tariff Scenario Layer",
            "Industry / Product Mapping",
            "Exposure + Substitution Logic",
            "UI Decision Support",
          ].map((node, idx) => (
            <div key={node} className="rounded border border-slate-200 p-3">
              <p className="font-medium">{node}</p>
              {idx < 4 && <p className="mt-2 text-slate">→</p>}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
