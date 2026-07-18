import Link from 'next/link'

type BackLinkProps = {
    label?: string
}

export default function BackLink({ label = 'Zurück zum Dashboard' }: BackLinkProps) {
    return (
        <Link
            href="/"
            className="group inline-flex items-center gap-2 font-[family:var(--font-mono)] text-[11px] font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-sky-600"
        >
            <span
                aria-hidden="true"
                className="flex h-6 w-6 items-center justify-center rounded-md border border-slate-200 bg-white/70 text-slate-500 shadow-sm backdrop-blur transition-colors group-hover:border-sky-300 group-hover:text-sky-600"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.25}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                >
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </svg>
            </span>
            {label}
        </Link>
    )
}
