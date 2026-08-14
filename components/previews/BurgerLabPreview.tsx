import ScaledShell from "./ScaledShell";

export default function BurgerLabPreview() {
  return (
    <ScaledShell bg="#111111">
      <div className="flex items-center justify-between border-b border-white/10 px-8 py-4 text-white">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#F5B942] text-xs font-black text-black">
            BL
          </span>
          <span className="text-xl font-extrabold uppercase tracking-wide">
            Burger Lab
          </span>
        </div>
        <span className="rounded-md bg-[#F5B942] px-3 py-2 text-[9px] font-black uppercase tracking-wider text-black">
          Peça agora
        </span>
      </div>

      <div className="grid flex-1 grid-cols-2 items-center gap-8 px-8 py-10 text-white">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F5B942]">
            Smash · Craft · Fire
          </p>
          <h3 className="mt-4 text-[44px] font-extrabold uppercase leading-[0.9]">
            Burgers
            <br />
            que batem
            <br />
            <span className="text-[#F5B942]">diferente.</span>
          </h3>
          <div className="mt-6 flex gap-2">
            <span className="rounded-md bg-[#F5B942] px-4 py-2.5 text-[11px] font-black uppercase text-black">
              Ver cardápio
            </span>
            <span className="rounded-md border border-white/20 px-4 py-2.5 text-[11px] font-bold uppercase">
              Delivery
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-5">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-extrabold text-[#F5B942]">#01</span>
            <span className="rounded-full bg-[#F5B942]/15 px-2 py-1 text-[8px] font-black uppercase tracking-wider text-[#F5B942]">
              Best seller
            </span>
          </div>
          <div className="mx-auto my-6 h-24 w-24 rounded-full border-[8px] border-[#F5B942]/25 bg-[#F5B942]/10" />
          <p className="text-2xl font-extrabold uppercase">Lab Smash</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-2xl font-extrabold text-[#F5B942]">R$ 32</span>
            <span className="rounded-md bg-white px-3 py-2 text-[9px] font-black uppercase text-black">
              Adicionar
            </span>
          </div>
        </div>
      </div>
    </ScaledShell>
  );
}
