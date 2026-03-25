import Link from "next/link";
import { notFound } from "next/navigation";
import { getAlternatives, getCountry, getIndustry, getScenarioById, getScenarioFlow, pressureDirection, usRegionData } from "@/lib/data";

export function generateStaticParams() {
  return [
    { id: "s01" }, { id: "s02" }, { id: "s03" }, { id: "s04" }, { id: "s05" }, { id: "s06" },
    { id: "s07" }, { id: "s08" }, { id: "s09" }, { id: "s10" }, { id: "s11" }, { id: "s12" },
  ];
}

export default function ScenarioDetailPage({ params }: { params: { id: string } }) {
  const scenario = getScenarioById(params.id);
  if (!scenario) return notFound();

  const industry = getIndustry(scenario.industryId);
  const country = getCountry(scenario.countryCode);
  const flows = getScenarioFlow(scenario.countryCode, scenario.industryId);
  const alternatives = getAlternatives(scenario.countryCode, scenario.industryId);
  const regions = usRegionData.filter((r) => scenario.regionIds.includes(r.id));

  return (
    <main className="section space-y-6">
      <p className="text-sm text-slate">Scenario / {scenario.id}</p>
      <h1 className="text-3xl font-semibold">{scenario.title}</h1>
      <p className="text-sm text-steel">What happens to {regions[0]?.name ?? "U.S."} {industry?.name.toLowerCase()} participants if tariffs on {country?.name} components rise by {scenario.tariffDeltaPct}%?</p>

      <div className="card p-5">
        <h2 className="font-semibold">Scenario setup</h2>
        <p className="mt-2 text-sm text-steel">{country?.name} · {industry?.name} · {scenario.mode} mode · {scenario.year}</p>
      </div>

      <div className="card p-5">
        <h2 className="font-semibold">Headline findings</h2>
        <p className="mt-2 text-sm text-steel">{scenario.headline}</p>
      </div>

      <div className="card p-5">
        <h2 className="font-semibold">Exposure breakdown</h2>
        <ul className="mt-2 space-y-1 text-sm text-steel">
          {flows.map((f) => (
            <li key={f.id}>{f.productGroup}: import ${f.importExposureValue.toFixed(1)}B · export ${f.exportExposureValue.toFixed(1)}B</li>
          ))}
        </ul>
      </div>

      <div className="card p-5">
        <h2 className="font-semibold">Alternative-country options</h2>
        <ul className="mt-2 space-y-1 text-sm text-steel">
          {alternatives.map((a) => (
            <li key={a.id}>{a.alternativeCountryCode} ({a.relativeStrengthLabel}): {a.rationale}</li>
          ))}
        </ul>
      </div>

      <div className="card p-5">
        <h2 className="font-semibold">Likely first-order impacts</h2>
        <p className="mt-2 text-sm text-steel">Pressure direction: {pressureDirection(scenario.mode, scenario.tariffDeltaPct)}.</p>
        <p className="mt-2 text-sm text-steel">{scenario.summary}</p>
      </div>

      <div className="card p-5">
        <h2 className="font-semibold">Limitations / caveats</h2>
        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-steel">
          {scenario.caveats.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>

      <Link href="/request-analysis" className="inline-block rounded bg-ink px-4 py-2 text-sm text-white">Request tailored analysis</Link>
    </main>
  );
}
