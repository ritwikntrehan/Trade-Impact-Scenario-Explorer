export function KpiCards({ importExposure, exportExposure, tariff, pressure }: { importExposure: number; exportExposure: number; tariff: number; pressure: string }) {
  const cards = [
    { label: "Import Exposure", value: `$${importExposure.toFixed(1)}B` },
    { label: "Export Exposure", value: `$${exportExposure.toFixed(1)}B` },
    { label: "Tariff Delta", value: `${tariff}%` },
    { label: "First-order Pressure", value: pressure },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {cards.map((card) => (
        <div key={card.label} className="card p-4">
          <p className="text-xs uppercase tracking-wide text-slate">{card.label}</p>
          <p className="mt-2 text-lg font-semibold text-ink">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
