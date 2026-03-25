import scenarios from "@/data/scenarios.json";
import tradeFlows from "@/data/tradeFlows.json";
import industries from "@/data/industries.json";
import countries from "@/data/countries.json";
import alternatives from "@/data/alternatives.json";
import usRegions from "@/data/usRegions.json";
import type { Alternative, Country, Industry, Scenario, TradeFlow, USRegion } from "./types";

export const scenarioData = scenarios as Scenario[];
export const tradeFlowData = tradeFlows as TradeFlow[];
export const industryData = industries as Industry[];
export const countryData = countries as Country[];
export const alternativeData = alternatives as Alternative[];
export const usRegionData = usRegions as USRegion[];

export const getScenarioById = (id: string) => scenarioData.find((s) => s.id === id);
export const getIndustry = (industryId: string) => industryData.find((i) => i.id === industryId);
export const getCountry = (countryCode: string) => countryData.find((c) => c.code === countryCode);

export const getScenarioFlow = (countryCode: string, industryId: string) =>
  tradeFlowData.filter((f) => f.countryCode === countryCode && f.industryId === industryId);

export const getAlternatives = (countryCode: string, industryId: string) =>
  alternativeData.filter((a) => a.sourceCountryCode === countryCode && a.industryId === industryId);

export const pressureDirection = (mode: "import" | "export", tariffDeltaPct: number) => {
  if (mode === "import" && tariffDeltaPct > 10) return "higher cost pressure + sourcing incentive";
  if (mode === "import") return "moderate substitution pressure";
  return "export retaliation risk + demand softness";
};
