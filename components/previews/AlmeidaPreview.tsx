export default function AlmeidaPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#F8F7F4]">
      {/* "screenshot" em escala — evita esticar o layout */}
      <div
        className="origin-top-left"
        style={{
          width: "220%",
          height: "220%",
          transform: "scale(0.455)",
        }}
      >
        <div className="flex h-full flex-col bg-[#F8F7F4]">
          <div className="flex items-center justify-between border-b border-[#0B1F33]/10 px-8 py-5">
            <span className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#0B1F33]">
              Almeida <span className="text-[#B89B5E]">Advocacia</span>
            </span>

            <div className="flex gap-6 text-[11px] text-[#0B1F33]/45">
              <span>O escritório</span>
              <span>Atuação</span>
              <span>Contato</span>
            </div>

            <span className="border border-[#0B1F33] px-3 py-2 text-[9px] font-semibold uppercase tracking-wider text-[#0B1F33]">
              Fale conosco
            </span>
          </div>

          <div className="grid flex-1 grid-cols-[1.05fr_0.95fr] items-center gap-10 px-8 py-10">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B89B5E]">
                Advocacia estratégica
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-[42px] font-light leading-[0.95] text-[#0B1F33]">
                Estratégia,
                <br />
                experiência e
                <br />
                <span className="italic text-[#B89B5E]">confiança.</span>
              </h3>

              <p className="mt-5 max-w-[280px] text-[12px] leading-5 text-[#0B1F33]/55">
                Atuamos de forma estratégica na defesa dos interesses de nossos
                clientes.
              </p>

              <div className="mt-6 flex gap-3">
                <span className="bg-[#0B1F33] px-4 py-2.5 text-[11px] font-semibold text-white">
                  Agende uma conversa
                </span>
                <span className="border border-[#0B1F33]/20 px-4 py-2.5 text-[11px] text-[#0B1F33]">
                  Nossa atuação
                </span>
              </div>
            </div>

            <div className="relative flex aspect-[4/5] max-h-[320px] w-full flex-col justify-between bg-[#0B1F33] p-6">
              <div className="flex justify-end">
                <span className="font-[family-name:var(--font-cormorant)] text-5xl text-[#B89B5E]/30">
                  A
                </span>
              </div>

              <div>
                <div className="mb-3 h-px w-10 bg-[#B89B5E]" />
                <p className="font-[family-name:var(--font-cormorant)] text-2xl leading-tight text-white">
                  Direito com
                  <br />
                  propósito.
                </p>
                <p className="mt-3 max-w-[200px] text-[11px] leading-5 text-white/45">
                  Excelência técnica para decisões que exigem segurança.
                </p>
              </div>

              <div className="flex items-end justify-between">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                  São Paulo · Brasil
                </span>
                <span className="font-[family-name:var(--font-cormorant)] text-2xl text-[#B89B5E]">
                  01
                </span>
              </div>
            </div>
          </div>

          <div className="mx-8 mb-8 grid grid-cols-4 gap-px overflow-hidden border border-[#0B1F33]/10 bg-[#0B1F33]/10">
            {[
              ["01", "Empresarial"],
              ["02", "Civil"],
              ["03", "Contratos"],
              ["04", "Consultoria"],
            ].map(([number, area]) => (
              <div key={area} className="bg-[#F8F7F4] px-4 py-4">
                <p className="text-[9px] text-[#B89B5E]">{number}</p>
                <p className="mt-2 text-[12px] text-[#0B1F33]">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
