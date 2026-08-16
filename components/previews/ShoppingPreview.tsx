import ScaledShell from "./ScaledShell";

export default function ShoppingPreview() {
  return (
    <ScaledShell bg="#07070C">
      <div className="flex items-center justify-between border-b border-white/10 px-8 py-5 text-white">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#2EE6A6]" />
          <span className="text-lg font-bold tracking-tight">AURORA</span>
        </div>
        <span className="bg-[#2EE6A6] px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-[#07070C]">
          Buscar loja
        </span>
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center px-8 py-12 text-center text-white">
        <div className="absolute left-1/2 top-6 h-40 w-40 -translate-x-1/2 rounded-full bg-[#2EE6A6]/20 blur-3xl" />
        <p className="relative text-[10px] font-bold uppercase tracking-[0.3em] text-[#2EE6A6]">
          Shopping · São Paulo
        </p>
        <h3 className="relative mt-4 text-[42px] font-bold leading-[1.05]">
          O diretório vivo
          <br />
          da cidade.
        </h3>
        <div className="relative mt-8 flex w-full max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5">
          <span className="flex-1 px-3 text-left text-[11px] text-white/35">
            Buscar loja, produto...
          </span>
          <span className="rounded-full bg-[#2EE6A6] px-3 py-2 text-[9px] font-bold uppercase text-[#07070C]">
            Buscar
          </span>
        </div>
        <div className="relative mt-4 flex gap-2">
          {["Moda", "Food", "Tech"].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/15 px-2.5 py-1 text-[9px] text-white/50"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </ScaledShell>
  );
}
