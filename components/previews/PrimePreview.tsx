import ScaledShell from "./ScaledShell";

export default function PrimePreview() {
  return (
    <ScaledShell bg="#17202A">
      <div className="flex items-center justify-between border-b border-white/10 px-8 py-5 text-white">
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold">Prime</span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
            Imóveis
          </span>
        </div>
        <span className="border border-white/30 px-3 py-2 text-[9px] font-semibold uppercase tracking-wider">
          Fale com um consultor
        </span>
      </div>

      <div className="relative flex flex-1 flex-col justify-center px-8 py-10 text-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-[#24313A]" />
        <div className="relative max-w-lg">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C6A15B]">
            Imóveis selecionados
          </p>
          <h3 className="mt-4 text-[42px] font-light leading-[0.95]">
            O endereço
            <br />
            certo muda
            <br />
            <span className="italic text-[#C6A15B]">tudo.</span>
          </h3>
          <div className="mt-6 flex gap-3">
            <span className="bg-[#C6A15B] px-4 py-2.5 text-[11px] font-semibold text-[#17202A]">
              Explorar imóveis
            </span>
            <span className="border border-white/20 px-4 py-2.5 text-[11px]">
              Conheça a Prime
            </span>
          </div>
        </div>

        <div className="relative mt-10 grid grid-cols-[1.2fr_1fr_1fr_auto] border border-white/10 bg-white p-2 text-[#17202A]">
          {["Comprar", "São Paulo", "Todos"].map((item) => (
            <div key={item} className="border-r border-[#17202A]/10 px-3 py-2">
              <p className="text-[8px] uppercase tracking-wider text-[#17202A]/40">
                Campo
              </p>
              <p className="mt-1 text-[11px] font-medium">{item}</p>
            </div>
          ))}
          <div className="flex items-center bg-[#17202A] px-4 text-[10px] font-semibold uppercase tracking-wider text-white">
            Buscar
          </div>
        </div>
      </div>
    </ScaledShell>
  );
}
