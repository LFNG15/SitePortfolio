import type { CSSProperties } from 'react'

export function CornerBrackets({
  color = 'rgba(255,255,255,0.5)',
  size = 10,
  inset = -4,
}: {
  color?: string
  size?: number
  inset?: number
}) {
  const base: CSSProperties = { position: 'absolute', width: size, height: size, pointerEvents: 'none' }
  return (
    <>
      <span style={{ ...base, top: inset, left: inset, borderTop: `1px solid ${color}`, borderLeft: `1px solid ${color}` }} />
      <span style={{ ...base, top: inset, right: inset, borderTop: `1px solid ${color}`, borderRight: `1px solid ${color}` }} />
      <span style={{ ...base, bottom: inset, left: inset, borderBottom: `1px solid ${color}`, borderLeft: `1px solid ${color}` }} />
      <span style={{ ...base, bottom: inset, right: inset, borderBottom: `1px solid ${color}`, borderRight: `1px solid ${color}` }} />
    </>
  )
}

export function SectionLabel({
  color = '#ffffff',
  children,
  className = '',
}: {
  color?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className="h-px w-10" style={{ backgroundColor: color }} />
      <span
        className="text-xs font-medium tracking-[0.3em] uppercase"
        style={{ color }}
      >
        {children}
      </span>
    </div>
  )
}