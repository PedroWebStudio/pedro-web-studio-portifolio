import ScaledShell from "./ScaledShell";

export default function ShoppingPreview() {
  return (
    <ScaledShell bg="#0A0A0F">
      <div className="flex items-center justify-between border-b border-white/10 px-8 py-5 text-white">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#2EE6A6]" />
          <span className="text-lg font-bold tracking-tight">AURORA</span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
            Shopping
          </span>
        </div>
        <span className="border border-[#2EE6A6]/40 px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-[#2EE6A6]">
          Ver eventos
        </span>
      </div>

      <div className="grid flex-1 grid-cols-[1.1fr_0.9fr] items-center gap-8 px-8 py-10 text-white">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2EE6A6]">
            O shopping da cidade
          </p>
          <h3 className="mt-4 text-[48px] font-bold leading-[0.9]">
            Compre.
            <br />
            Coma.
            <br />
            <span className="text-[#2EE6A6]">Viva.</span>
          </h3>
          <div className="mt-6 flex gap-3">
            <span className="bg-[#2EE6A6] px-4 py-2.5 text-[11px] font-bold uppercase text-[#0A0A0F]">
              Explorar lojas
            </span>
            <span className="border border-white/20 px-4 py-2.5 text-[11px] font-semibold uppercase">
              A experiência
            </span>
          </div>
        </div>

        <div className="border border-white/10 bg-[#12121A] p-5">
          <div className="mb-5 flex justify-between border-b border-white/10 pb-3 text-[10px]">
            <span className="uppercase tracking-wider text-white/40">
              Hoje no Aurora
            </span>
            <span className="font-bold text-[#2EE6A6]">AO VIVO</span>
          </div>
          {[
            ["Food Hall", "42 operações"],
            ["Cinema", "8 salas"],
            ["Aberto até", "22h"],
          ].map(([label, value]) => (
            <div key={label} className="mb-4">
              <p className="text-[9px] uppercase tracking-wider text-white/40">
                {label}
              </p>
              <p className="mt-1 text-xl font-bold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </ScaledShell>
  );
}
