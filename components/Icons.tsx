import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function base(props: IconProps) {
    return {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round' as const,
        strokeLinejoin: 'round' as const,
        'aria-hidden': true,
        ...props,
    }
}

export function TerminalIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
    )
}

export function ActivityIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
    )
}

export function CalendarIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    )
}

export function LockIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    )
}

export function UnlockIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 9.9-1" />
        </svg>
    )
}

export function MessageIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    )
}

export function FileTextIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
    )
}

export function InfoIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
    )
}

export function CheckCircleIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    )
}

export function AlertCircleIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    )
}

export function BrainIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3v1a3 3 0 0 0 3 3h.5a2.5 2.5 0 0 0 2.5-2.5V5.5A2.5 2.5 0 0 0 9.5 3z" />
            <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3v1a3 3 0 0 1-3 3h-.5a2.5 2.5 0 0 1-2.5-2.5V5.5A2.5 2.5 0 0 1 14.5 3z" />
        </svg>
    )
}

export function ImageIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
        </svg>
    )
}

export function DatabaseIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
    )
}

export function GiftIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
    )
}

export function HeartIcon(props: IconProps) {
    return (
        <svg {...base(props)} fill="currentColor" stroke="none">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
    )
}

export function ArrowRightIcon(props: IconProps) {
    return (
        <svg {...base(props)}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    )
}
