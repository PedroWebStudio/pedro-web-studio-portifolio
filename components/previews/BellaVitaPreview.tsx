import ScaledShell from "./ScaledShell";

export default function BellaVitaPreview() {
  return (
    <ScaledShell bg="#FAF7F2">
      <div className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6B8F71]/15 text-sm font-semibold text-[#6B8F71]">
            B
          </span>
          <span className="text-lg text-[#3D3632]">Bella Vita</span>
        </div>
        <span className="rounded-full bg-[#6B8F71] px-4 py-2 text-[9px] font-semibold uppercase tracking-wider text-white">
          Agendar
        </span>
      </div>

      <div className="grid flex-1 grid-cols-2 items-center gap-8 px-8 pb-10">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#6B8F71]">
            Clínica de bem-estar
          </p>
          <h3 className="mt-4 text-[38px] font-light leading-[1.05] text-[#3D3632]">
            Cuidado que
            <br />
            respeita o seu
            <br />
            <span className="italic text-[#6B8F71]">ritmo.</span>
          </h3>
          <div className="mt-6 flex gap-2">
            <span className="rounded-full bg-[#3D3632] px-4 py-2.5 text-[11px] font-semibold text-white">
              Agendar avaliação
            </span>
            <span className="rounded-full border border-[#3D3632]/15 px-4 py-2.5 text-[11px] text-[#3D3632]">
              Ver cuidados
            </span>
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#EDE6DC] p-5">
          <div className="flex min-h-[240px] flex-col justify-between rounded-[1.5rem] bg-[#FAF7F2] p-6">
            <div className="flex justify-between">
              <span className="rounded-full bg-[#6B8F71]/12 px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#6B8F71]">
                Bem-estar
              </span>
              <span className="text-3xl text-[#D4A5A5]/70">BV</span>
            </div>
            <div>
              <p className="text-2xl leading-snug text-[#3D3632]">
                Pele, equilíbrio
                <br />e presença.
              </p>
              <p className="mt-3 text-[11px] text-[#3D3632]/50">
                Protocolos suaves e acolhedores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScaledShell>
  );
}
