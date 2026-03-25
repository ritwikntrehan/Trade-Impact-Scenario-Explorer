import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="section py-14">
        <p className="text-sm font-medium text-accent">Trade Impact / Tariff Scenario Explorer</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight">Explore first-order trade exposure under tariff-change scenarios.</h1>
        <p className="mt-4 max-w-3xl text-lg text-steel">A serious, static-first proof-of-capability showing how an intelligence layer can sit on top of public trade, tariff, and industry data.</p>
        <div className="mt-7 flex gap-3">
          <Link href="/explorer" className="rounded bg-ink px-4 py-2 text-sm text-white">Explore Scenarios</Link>
          <Link href="/request-analysis" className="rounded border border-slate-300 px-4 py-2 text-sm text-ink">Request Analysis</Link>
        </div>
      </section>

      <section className="section grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-semibold">The problem</h2>
          <p className="mt-2 text-sm text-steel">Tariff changes are discussed constantly, but many firms and advisors still lack a quick way to translate policy shifts into industry- and geography-specific exposure views.</p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold">Product value</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-steel">
            <li>Exposure analysis by product group and trade mode</li>
            <li>First-order impact summaries and pressure direction</li>
            <li>Alternative sourcing views and scenario comparison</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="text-2xl font-semibold">Three-step workflow</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            ["1", "Select scenario", "Choose country, industry, tariff delta, and mode."],
            ["2", "View exposure", "Inspect KPI cards, product-group exposure bars, and region relevance."],
            ["3", "Interpret implications", "Review likely first-order impacts, alternatives, and caveats."],
          ].map(([n, title, text]) => (
            <div key={n} className="card p-5">
              <p className="text-xs text-slate">Step {n}</p>
              <h3 className="mt-1 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-steel">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="text-2xl font-semibold">Screen preview</h2>
        <div className="card mt-4 p-6">
          <p className="text-sm text-steel">The explorer combines scenario controls, exposure KPIs, product-group bars, alternative-country ranking, geographic highlight panels, and caveat-aware interpretation.</p>
        </div>
        <p className="mt-4 text-xs text-slate">This prototype illustrates first-order scenario analysis and does not claim full equilibrium forecasting.</p>
      </section>
    </main>
  );
}
