import type { ReactNode } from "react";

export default function ScaledShell({
  bg,
  children,
}: {
  bg: string;
  children: ReactNode;
}) {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      <div
        className="origin-top-left"
        style={{ width: "220%", height: "220%", transform: "scale(0.455)" }}
      >
        <div className="flex h-full flex-col" style={{ backgroundColor: bg }}>
          {children}
        </div>
      </div>
    </div>
  );
}
