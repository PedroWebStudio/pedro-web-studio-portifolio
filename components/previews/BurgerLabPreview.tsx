import ScaledShell from "./ScaledShell";

export default function BurgerLabPreview() {
  return (
    <ScaledShell bg="#0E0E0E">
      <div className="flex items-center justify-between border-b border-white/10 px-8 py-4 text-white">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center bg-[#F5B942] text-xs font-black text-black">
            BL
          </span>
          <span className="text-xl font-extrabold uppercase tracking-wide">
            Burger Lab
          </span>
        </div>
        <span className="rounded-full bg-[#F5B942] px-3 py-2 text-[9px] font-black uppercase text-black">
          Sacola 2
        </span>
      </div>

      <div className="relative flex flex-1 flex-col justify-end overflow-hidden px-8 pb-12 pt-14 text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(150deg, #2a1f0a 0%, #1a1408 35%, #0E0E0E 100%), radial-gradient(ellipse at 75% 40%, rgba(245,185,66,0.45), transparent 55%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div
          className="absolute -right-4 top-8 h-48 w-48 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(245,185,66,0.55), transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5B942]">
            Smash · Craft · Lab
          </p>
          <h3 className="mt-3 text-[52px] font-extrabold uppercase leading-[0.85]">
            Burgers
            <br />
            <span className="text-[#F5B942]">that hit</span>
            <br />
            different.
          </h3>
          <div className="mt-8 flex gap-2">
            {["Todos", "Smash", "Spicy"].map((t, i) => (
              <span
                key={t}
                className={`px-2.5 py-1 text-[9px] font-black uppercase ${
                  i === 0
                    ? "bg-[#F5B942] text-black"
                    : "border border-white/20 text-white/50"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScaledShell>
  );
}
