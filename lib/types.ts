export type Scenario = {
  id: string;
  title: string;
  countryCode: string;
  countryName: string;
  industryId: string;
  tariffDeltaPct: number;
  mode: "import" | "export";
  year: number;
  headline: string;
  summary: string;
  caveats: string[];
  topProductGroupIds: string[];
  alternativeCountryIds: string[];
  regionIds: string[];
};

export type TradeFlow = {
  id: string;
  countryCode: string;
  industryId: string;
  productGroup: string;
  importExposureValue: number;
  exportExposureValue: number;
  exposureShare: number;
  sensitivityLabel: "low" | "medium" | "high";
  notes: string;
};

export type Industry = {
  id: string;
  name: string;
  shortDescription: string;
  commonProductGroups: string[];
  likelyRisks: string[];
  likelySubstitutions: string[];
};

export type Country = {
  code: string;
  name: string;
  region: string;
  roleLabels: string[];
  notes: string;
};

export type Alternative = {
  id: string;
  sourceCountryCode: string;
  industryId: string;
  alternativeCountryCode: string;
  rationale: string;
  relativeStrengthLabel: "strong" | "moderate" | "emerging";
  caveats: string;
};

export type USRegion = {
  id: string;
  name: string;
  type: string;
  relatedIndustries: string[];
  relevanceNote: string;
};
