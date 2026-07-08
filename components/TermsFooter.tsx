'use client'

import { useTerms } from './TermsProvider'

export default function TermsFooter() {
    const { open, accepted } = useTerms()

    return (
        <footer className="mt-auto w-full border-t border-slate-200/60 bg-white/50 py-10 text-center">
            <p className="flex items-center justify-center gap-4 font-[family:var(--font-mono)] text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <button
                    type="button"
                    onClick={() => undefined}
                    className="transition hover:text-sky-600"
                >
                    Impressum
                </button>

                <span aria-hidden="true" className="text-slate-300">
                    ·
                </span>

                <button
                    type="button"
                    onClick={open}
                    className="group relative transition hover:text-sky-600"
                    title="Easter Egg: Die AGB sind eigentlich nur Komplimente"
                >
                    AGB
                    <span className="pointer-events-none absolute -top-8 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] normal-case tracking-normal text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
                        (Eigentlich nur Komplimente)
                    </span>
                </button>

                <span aria-hidden="true" className="text-slate-300">
                    ·
                </span>

                <button
                    type="button"
                    onClick={() => undefined}
                    className="transition hover:text-sky-600"
                >
                    Datenschutz
                </button>
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-[family:var(--font-mono)] text-[10px] text-slate-500">
                <span aria-hidden="true">›</span>
                System Build 23.0.1
            </div>

            {accepted && (
                <p className="mt-3 text-xs text-slate-400">
                    AGB akzeptiert. Status wird intern verarbeitet. 💙
                </p>
            )}
        </footer>
    )
}
