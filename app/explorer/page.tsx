import { ScenarioExplorerClient } from "@/components/ScenarioExplorerClient";

export default function ExplorerPage() {
  return (
    <main>
      <div className="section pb-0">
        <h1 className="text-3xl font-semibold">Tariff Scenario Explorer</h1>
        <p className="mt-2 text-sm text-steel">Use controls to view first-order trade exposure and sourcing alternative views under a selected tariff-change scenario.</p>
      </div>
      <ScenarioExplorerClient />
    </main>
  );
}
