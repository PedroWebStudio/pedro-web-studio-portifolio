import ScaledShell from "./ScaledShell";

export default function PrimePreview() {
  return (
    <ScaledShell bg="#11151C">
      <div className="flex items-center justify-between border-b border-white/10 px-8 py-5 text-white">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-semibold">Prime</span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#C6A15B]">
            Imóveis
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-wider text-[#C6A15B]">
          Favoritos
        </span>
      </div>

      <div className="relative flex flex-1 flex-col justify-end overflow-hidden px-8 pb-12 pt-16 text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(145deg, #2a3344 0%, #1a2230 40%, #11151C 100%), radial-gradient(ellipse at 80% 30%, rgba(198,161,91,0.28), transparent 50%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11151C] via-[#11151C]/55 to-transparent" />
        <div
          className="absolute right-6 top-10 h-40 w-52 opacity-30"
          style={{
            background:
              "linear-gradient(135deg, rgba(244,241,234,0.25), transparent 60%)",
            clipPath: "polygon(12% 0, 100% 8%, 88% 100%, 0 92%)",
          }}
        />
        <div className="relative z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C6A15B]">
            Destaque 01 / 03
          </p>
          <h3 className="mt-3 text-[40px] leading-tight">
            Apartamento
            <br />
            Jardins
          </h3>
          <p className="mt-3 text-[11px] text-white/50">
            Jardins · 142 m² · 3 dorms
          </p>
          <p className="mt-4 text-2xl text-[#C6A15B]">R$ 1.850.000</p>
          <div className="mt-6 flex gap-2">
            <span className="h-1.5 w-8 bg-[#C6A15B]" />
            <span className="h-1.5 w-8 bg-white/20" />
            <span className="h-1.5 w-8 bg-white/20" />
          </div>
        </div>
      </div>
    </ScaledShell>
  );
}
