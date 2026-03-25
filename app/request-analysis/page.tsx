export default function RequestAnalysisPage() {
  return (
    <main className="section space-y-6">
      <h1 className="text-3xl font-semibold">Request Tailored Scenario Analysis</h1>
      <p className="max-w-3xl text-sm text-steel">Tailored scenario work is available by request or pilot engagement. This form is demo-ready and routes to a configurable mailto path in phase 1.</p>

      <form className="card grid gap-4 p-6 md:grid-cols-2" action="mailto:pilot@tradeimpactexplorer.com" method="post" encType="text/plain">
        {[
          "Name", "Organization", "Role", "Industry", "Geography", "Trade concern / question",
          "Countries involved", "Product categories involved", "Website", "Notes",
        ].map((label) => (
          <label key={label} className={`text-xs text-steel ${label === "Notes" || label === "Trade concern / question" ? "md:col-span-2" : ""}`}>
            {label}
            <input className="mt-1 w-full rounded border border-slate-300 p-2 text-sm" name={label} />
          </label>
        ))}
        <button className="rounded bg-ink px-4 py-2 text-sm text-white md:col-span-2" type="submit">Submit Pilot Request</button>
      </form>
    </main>
  );
}
