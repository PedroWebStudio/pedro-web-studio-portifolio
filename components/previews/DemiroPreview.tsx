export default function DemiroPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0A0A0A]">
      <div
        className="origin-top-left"
        style={{
          width: "220%",
          height: "220%",
          transform: "scale(0.455)",
        }}
      >
        <div
          className="flex h-full flex-col"
          style={{
            background:
              "linear-gradient(115deg, #0A0A0A 0%, #0A0A0A 52%, #FFD400 52%, #FFD400 100%)",
          }}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">
            <div className="flex items-center gap-3">
              <span className="h-8 w-2.5 rounded-full bg-[repeating-linear-gradient(-45deg,#FFD400_0_6px,#0A0A0A_6px_12px,#fff_12px_18px,#0A0A0A_18px_24px)]" />
              <span className="font-[family-name:var(--font-cormorant)] text-xl tracking-wide text-[#FFD400]">
                DEMIRO CORTES
              </span>
            </div>
            <span className="bg-[#FFD400] px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-black">
              Agendar
            </span>
          </div>

          <div className="flex flex-1 flex-col justify-end px-8 pb-12 pt-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#FFD400]">
              Barbearia · São Paulo
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-[52px] leading-[0.92] text-white">
              CORTE
              <br />
              COM
              <br />
              <span className="text-black">ATITUDE.</span>
            </h3>
            <div className="mt-8 flex gap-3">
              <span className="bg-black px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-[#FFD400]">
                Agendar agora
              </span>
              <span className="border border-black/30 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-black">
                Como chegar
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
