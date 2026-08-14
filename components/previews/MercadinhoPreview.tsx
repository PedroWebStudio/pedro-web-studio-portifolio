import ScaledShell from "./ScaledShell";

export default function MercadinhoPreview() {
  return (
    <ScaledShell bg="#FFF8F0">
      <div className="flex items-center justify-between border-b-4 border-[#E85D4C] bg-white px-8 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#E85D4C] text-sm font-black text-white">
            M
          </span>
          <div>
            <p className="text-sm font-extrabold leading-none text-[#1F2A24]">
              Mercadinho
            </p>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#2D6A4F]">
              Bom Dia
            </p>
          </div>
        </div>
        <span className="rounded-2xl bg-[#2D6A4F] px-3 py-2 text-[9px] font-extrabold uppercase text-white">
          Como chegar
        </span>
      </div>

      <div className="grid flex-1 grid-cols-[1.1fr_0.9fr] items-center gap-8 px-8 py-10">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-[#2D6A4F]/10 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#2D6A4F]">
            Do bairro, para o bairro
          </p>
          <h3 className="text-[40px] font-black leading-[1.02] text-[#1F2A24]">
            Fresco,
            <br />
            perto e
            <br />
            <span className="text-[#E85D4C]">com carinho.</span>
          </h3>
          <div className="mt-5 flex gap-2">
            <span className="rounded-2xl bg-[#E85D4C] px-4 py-2.5 text-[11px] font-extrabold text-white">
              Ver ofertas
            </span>
            <span className="rounded-2xl border-2 border-[#1F2A24]/15 px-4 py-2.5 text-[11px] font-extrabold text-[#1F2A24]">
              Horários
            </span>
          </div>
        </div>

        <div className="rounded-[1.5rem] border-4 border-[#1F2A24] bg-[#2D6A4F] p-4 text-white shadow-[8px_8px_0_#E85D4C]">
          <div className="rounded-2xl bg-[#1F3D2B] p-5">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#F4C95F]">
              Aberto agora
            </p>
            <p className="mt-3 text-4xl font-black">7h às 21h</p>
            <p className="mt-2 text-[11px] font-semibold text-white/65">
              Segunda a sábado
            </p>
          </div>
        </div>
      </div>
    </ScaledShell>
  );
}
