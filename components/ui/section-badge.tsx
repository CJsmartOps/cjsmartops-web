export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border-medium bg-glass px-3 py-1 text-[11px] font-medium tracking-widest text-glow uppercase backdrop-blur-md">
      {children}
    </span>
  );
}
