import ScaledShell from "./ScaledShell";

export default function OrbitPreview() {
  return (
    <ScaledShell bg="#09090B">
      <div className="flex items-center justify-between border-b border-white/5 px-8 py-4 text-zinc-100">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0EA5E9] text-xs font-bold text-white">
            O
          </span>
          <span className="text-base font-semibold">Orbit</span>
        </div>
        <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-semibold text-zinc-950">
          Start free
        </span>
      </div>

      <div className="flex flex-1 flex-col items-center px-8 py-8 text-center text-zinc-100">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
          v2.4 — now with automations
        </p>
        <h3 className="max-w-xl text-[36px] font-semibold leading-[1.05] tracking-tight">
          Analytics que sua startup{" "}
          <span className="text-[#0EA5E9]">realmente usa.</span>
        </h3>
        <div className="mt-5 flex gap-2">
          <span className="rounded-full bg-[#0EA5E9] px-4 py-2 text-[11px] font-semibold text-white">
            Start free trial
          </span>
          <span className="rounded-full border border-white/15 px-4 py-2 text-[11px]">
            Ver produto
          </span>
        </div>

        <div className="mt-8 w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-zinc-950 text-left">
          <div className="flex gap-2 border-b border-white/10 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-zinc-700" />
            <span className="h-2 w-2 rounded-full bg-zinc-700" />
            <span className="h-2 w-2 rounded-full bg-zinc-700" />
          </div>
          <div className="grid grid-cols-3 gap-2 p-3">
            {[
              ["MRR", "R$ 48.2k"],
              ["Users", "12.4k"],
              ["Churn", "2.1%"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
              >
                <p className="text-[8px] uppercase tracking-wider text-zinc-500">
                  {label}
                </p>
                <p className="mt-1 text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScaledShell>
  );
}
