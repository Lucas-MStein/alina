import Link from 'next/link'
import { TerminalIcon } from './Icons'

export default function TopNav() {
    return (
        <nav className="sticky top-0 z-40 flex w-full items-center justify-between border-b border-sky-100/50 bg-white/60 px-4 py-4 backdrop-blur-md sm:px-6">
            <Link
                href="/"
                className="flex items-center gap-2 text-slate-700 transition-colors hover:text-sky-600"
            >
                <TerminalIcon className="h-4 w-4 text-sky-500" />
                <span className="font-[family:var(--font-mono)] text-sm font-medium">
                    alinaist23.de
                </span>
            </Link>

            <div className="flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 shadow-sm">
                <span
                    aria-hidden="true"
                    className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"
                />
                <span className="font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-wider text-sky-800">
                    System Online
                </span>
            </div>
        </nav>
    )
}
