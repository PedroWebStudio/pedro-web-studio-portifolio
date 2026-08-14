import ScaledShell from "./ScaledShell";

export default function NobrePreview() {
  return (
    <ScaledShell bg="#F4F5F2">
      <div className="flex items-center justify-between border-b border-[#101820]/10 bg-[#F4F5F2] px-8 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center bg-[#101820] text-xs font-bold text-white">
            N
          </span>
          <span className="text-sm font-bold tracking-tight text-[#101820]">
            NOBRE <span className="font-normal">ENGENHARIA</span>
          </span>
        </div>
        <span className="bg-[#F05A28] px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-white">
          Fale conosco
        </span>
      </div>

      <div className="grid flex-1 grid-cols-[1.1fr_0.9fr] gap-8 bg-[#101820] px-8 py-10 text-white">
        <div className="flex flex-col justify-center">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 bg-[#F05A28]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
              Engenharia & construção
            </span>
          </div>
          <h3 className="text-[40px] font-bold leading-[0.92] tracking-[-0.04em]">
            Projetamos
            <br />
            espaços que
            <br />
            <span className="text-[#F05A28]">transformam.</span>
          </h3>
          <div className="mt-6 flex gap-3">
            <span className="bg-[#F05A28] px-4 py-2.5 text-[11px] font-bold">
              Ver projetos →
            </span>
            <span className="border border-white/20 px-4 py-2.5 text-[11px]">
              Conheça a Nobre
            </span>
          </div>
        </div>

        <div className="border border-white/10 bg-[#16242E] p-4">
          <div className="mb-3 flex justify-between text-[10px] text-white/40">
            <span>Projeto em destaque</span>
            <span className="text-[#F05A28]">2026</span>
          </div>
          <div className="relative h-[200px] bg-[#24343E]">
            <div className="absolute inset-x-8 bottom-0 h-[75%] border border-white/10 bg-[#1B2B35]" />
            <div className="absolute bottom-0 left-1/2 h-[90%] w-px -translate-x-1/2 bg-[#F05A28]/50" />
            <span className="absolute bottom-4 right-4 text-5xl font-bold text-white/10">
              01
            </span>
          </div>
          <p className="mt-3 text-sm font-bold">Residencial Aurora</p>
          <p className="text-[10px] text-white/40">São Paulo · SP</p>
        </div>
      </div>
    </ScaledShell>
  );
}
