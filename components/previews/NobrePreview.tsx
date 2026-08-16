import ScaledShell from "./ScaledShell";

export default function NobrePreview() {
  return (
    <ScaledShell bg="#101820">
      <div className="flex items-center justify-between border-b border-white/10 px-8 py-4 text-white">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center bg-[#F05A28] text-xs font-bold">
            N
          </span>
          <span className="text-sm font-bold tracking-tight">
            NOBRE <span className="font-normal text-white/50">ENGENHARIA</span>
          </span>
        </div>
        <span className="bg-[#F05A28] px-3 py-2 text-[9px] font-bold uppercase tracking-wider">
          Briefing
        </span>
      </div>

      <div className="relative flex flex-1 flex-col justify-end overflow-hidden px-8 pb-12 pt-16 text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #1a2835 0%, #0c1218 45%, #101820 100%), radial-gradient(ellipse at 70% 20%, rgba(240,90,40,0.35), transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,90,40,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(240,90,40,0.12) 1px, transparent 1px)",
            backgroundSize: "36px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/50 to-transparent" />
        <div className="relative z-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F05A28]">
            Engenharia de precisão
          </p>
          <h3 className="mt-4 text-[44px] font-bold leading-[0.95]">
            Obra complexa.
            <br />
            Controle total.
          </h3>
          <div className="mt-8 grid grid-cols-4 gap-px bg-white/10">
            {["240+", "18", "96%", "3"].map((n) => (
              <div key={n} className="bg-[#101820]/90 px-3 py-3 backdrop-blur">
                <p className="text-xl font-bold text-[#F05A28]">{n}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScaledShell>
  );
}
