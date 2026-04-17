import Link from 'next/link'
import Countdown from '@/components/Countdown'
import Letter from '@/components/Letter'
import MemoryCards from '@/components/MemoryCards'
import SurpriseButton from '@/components/SurpriseButton'
import { letterText, memories } from '@/lib/content'

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">
            <section className="mx-auto flex max-w-5xl flex-col items-center justify-center px-5 pb-12 pt-10 text-center sm:min-h-screen sm:px-6 sm:pb-0 sm:pt-0">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-600 sm:text-sm">
                    Für Alina
                </p>

                <h1 className="mt-3 font-[family:var(--font-heading)] text-4xl font-bold leading-none text-slate-900 sm:mt-4 sm:text-7xl">
                    Alles Gute
                    <br />
                    zum Geburtstag ✨
                </h1>

                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-8">
                    Eine kleine digitale Überraschung mit Erinnerungen, lieben Worten und
                    einem besonderen Moment nur für dich.
                </p>

                <Countdown target="2026-08-04T00:00:00+02:00" className="mt-8 sm:mt-10" />

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
                    <a
                        href="#momente"
                        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02] sm:px-6"
                    >
                        Überraschung starten
                    </a>

                    <Link
                        href="/gallery"
                        className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:scale-[1.02] hover:bg-sky-50 sm:px-6"
                    >
                        Zur Galerie
                    </Link>

                    <Link
                        href="/quiz"
                        className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:scale-[1.02] hover:bg-sky-50 sm:px-6"
                    >
                        Zum Quiz
                    </Link>
                </div>
            </section>

            <section id="momente" className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
                <div className="mb-10 text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
                        Erinnerungen
                    </p>
                    <h2 className="mt-3 font-[family:var(--font-heading)] text-4xl font-semibold text-slate-900">
                        Unsere schönsten Momente
                    </h2>
                </div>

                <MemoryCards memories={memories} />
            </section>

            <section className="mx-auto max-w-4xl px-5 py-8 sm:px-6 sm:py-10">
                <Letter title="Ein Brief für dich" text={letterText} />
            </section>

            <section className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 sm:py-16">
                <p className="mb-6 text-sm uppercase tracking-[0.3em] text-sky-600">
                    Noch eine Kleinigkeit
                </p>
                <SurpriseButton />
            </section>
        </main>
    )
}