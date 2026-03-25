export default function AboutPage() {
  const capabilities = [
    "Public data ingestion",
    "Scenario design",
    "Tariff / trade normalization",
    "Chart-and-map decision support",
    "Product architecture",
  ];

  return (
    <main className="section space-y-6">
      <h1 className="text-3xl font-semibold">About</h1>
      <p className="max-w-3xl text-sm text-steel">Trade Impact / Tariff Scenario Explorer was built as a public demonstration of trade-intelligence product design. The intent is to show practical structure, not to claim exact prediction.</p>
      <div className="card p-6">
        <h2 className="font-semibold">Why this exists</h2>
        <p className="mt-2 text-sm text-steel">Organizations often need fast, interpretable views of tariff sensitivity before committing to deeper analysis. This prototype demonstrates that workflow in a restrained, credible interface.</p>
      </div>
      <div className="card p-6">
        <h2 className="font-semibold">Capability areas</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-steel">
          {capabilities.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>
    </main>
  );
}
