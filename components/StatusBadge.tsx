import type { ReactNode } from 'react'

type StatusTone =
    | 'success'
    | 'info'
    | 'warning'
    | 'neutral'
    | 'accent'

type StatusBadgeProps = {
    tone?: StatusTone
    icon?: ReactNode
    children: ReactNode
    className?: string
}

const TONE_CLASSES: Record<StatusTone, string> = {
    success: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    info: 'text-sky-700 bg-sky-50 border-sky-200',
    warning: 'text-amber-700 bg-amber-50 border-amber-200',
    neutral: 'text-slate-500 bg-slate-100 border-slate-200',
    accent: 'text-blue-700 bg-blue-50 border-blue-200',
}

export default function StatusBadge({
    tone = 'neutral',
    icon,
    children,
    className = '',
}: StatusBadgeProps) {
    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-wider ${TONE_CLASSES[tone]} ${className}`}
        >
            {icon}
            {children}
        </span>
    )
}
