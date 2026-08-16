export default function AlmeidaPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#5A0B22]">
      <div
        className="origin-top-left"
        style={{
          width: "220%",
          height: "220%",
          transform: "scale(0.455)",
        }}
      >
        <div
          className="relative flex h-full flex-col items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 35%, #6e1230 0%, #5A0B22 48%, #2f0612 100%)",
          }}
        >
          <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/25" />
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col items-center px-8 text-center">
            <span className="font-[family-name:var(--font-cormorant)] text-6xl text-[#D4AF37]">
              MS
            </span>
            <p className="mt-4 font-[family-name:var(--font-cormorant)] text-2xl italic text-[#D4AF37]/90">
              Miriam Rodrigues Santos
            </p>
            <div className="mt-3 h-px w-24 bg-[#D4AF37]/50" />
            <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-white/55">
              Advocacia e consultoria jurídica
            </p>
            <p className="mt-8 max-w-[280px] text-[12px] leading-5 text-white/50">
              Critério, escuta e estratégia — para decisões que pedem segurança.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
