"use client";

import { useMemo, useState } from "react";
import { alternativeData, countryData, industryData, pressureDirection, scenarioData, tradeFlowData, usRegionData } from "@/lib/data";
import { KpiCards } from "./KpiCards";
import { BarChart } from "./BarChart";
import { MapPanel } from "./MapPanel";
import { NarrativePanel } from "./NarrativePanel";

export function ScenarioExplorerClient() {
  const defaultScenario = scenarioData[0];
  const [countryCode, setCountryCode] = useState(defaultScenario.countryCode);
  const [industryId, setIndustryId] = useState(defaultScenario.industryId);
  const [tariffDeltaPct, setTariffDeltaPct] = useState(defaultScenario.tariffDeltaPct);
  const [mode, setMode] = useState<"import" | "export">(defaultScenario.mode);
  const [year, setYear] = useState(defaultScenario.year);

  const flowRows = useMemo(
    () => tradeFlowData.filter((f) => f.countryCode === countryCode && f.industryId === industryId),
    [countryCode, industryId],
  );

  const importExposure = flowRows.reduce((sum, row) => sum + row.importExposureValue, 0);
  const exportExposure = flowRows.reduce((sum, row) => sum + row.exportExposureValue, 0);

  const productBars = flowRows.map((row) => ({
    label: row.productGroup,
    value: mode === "import" ? row.importExposureValue : row.exportExposureValue,
  }));

  const alternatives = alternativeData
    .filter((a) => a.sourceCountryCode === countryCode && a.industryId === industryId)
    .slice(0, 5)
    .map((a, i) => ({
      label: countryData.find((c) => c.code === a.alternativeCountryCode)?.name ?? a.alternativeCountryCode,
      value: 100 - i * 15,
    }));

  const matchedScenario =
    scenarioData.find((s) => s.countryCode === countryCode && s.industryId === industryId && s.mode === mode && s.year === year) ??
    defaultScenario;

  const regions = usRegionData.filter((r) => matchedScenario.regionIds.includes(r.id));

  return (
    <div className="section space-y-6">
      <div className="card grid gap-4 p-4 md:grid-cols-5">
        <label className="text-xs text-steel">
          Country
          <select className="mt-1 w-full rounded border border-slate-300 p-2 text-sm" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
            {countryData.map((c) => (
              <option key={c.code} value={c.code}>{c.name}</option>
            ))}
          </select>
        </label>
        <label className="text-xs text-steel">
          Industry
          <select className="mt-1 w-full rounded border border-slate-300 p-2 text-sm" value={industryId} onChange={(e) => setIndustryId(e.target.value)}>
            {industryData.map((i) => (
              <option key={i.id} value={i.id}>{i.name}</option>
            ))}
          </select>
        </label>
        <label className="text-xs text-steel">
          Tariff change ({tariffDeltaPct}%)
          <input type="range" min={0} max={30} step={1} value={tariffDeltaPct} onChange={(e) => setTariffDeltaPct(Number(e.target.value))} className="mt-3 w-full" />
        </label>
        <label className="text-xs text-steel">
          Mode
          <select className="mt-1 w-full rounded border border-slate-300 p-2 text-sm" value={mode} onChange={(e) => setMode(e.target.value as "import" | "export") }>
            <option value="import">Import</option>
            <option value="export">Export</option>
          </select>
        </label>
        <label className="text-xs text-steel">
          Year
          <select className="mt-1 w-full rounded border border-slate-300 p-2 text-sm" value={year} onChange={(e) => setYear(Number(e.target.value))}>
            {[2023, 2024, 2025].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="card p-5">
        <p className="text-xs uppercase tracking-wide text-slate">Scenario summary</p>
        <h1 className="mt-2 text-2xl font-semibold">{matchedScenario.headline}</h1>
        <p className="mt-2 text-sm text-steel">Selected: {countryData.find((c) => c.code === countryCode)?.name} · {industryData.find((i) => i.id === industryId)?.name} · {tariffDeltaPct}% tariff shift · {mode} mode.</p>
      </div>

      <KpiCards importExposure={importExposure} exportExposure={exportExposure} tariff={tariffDeltaPct} pressure={pressureDirection(mode, tariffDeltaPct)} />

      <div className="grid gap-4 lg:grid-cols-2">
        <BarChart data={productBars} title="Exposure by product group (USD billions)" suffix="B" />
        <BarChart data={alternatives} title="Alternative supplier ranking (relative score)" />
      </div>

      <MapPanel regions={regions} />

      <div className="grid gap-4 lg:grid-cols-2">
        <NarrativePanel summary={matchedScenario.summary} caveats={matchedScenario.caveats} />
        <div className="card p-5 text-xs text-steel">
          This prototype uses a curated and simplified local dataset, with transparent assumptions for first-order scenario analysis.
        </div>
      </div>
    </div>
  );
}
