import Link from 'next/link'
import Countdown from '@/components/Countdown'
import Letter from '@/components/Letter'
import MemoryCards from '@/components/MemoryCards'
import SurpriseButton from '@/components/SurpriseButton'
import { letterText, memories } from '@/lib/content'

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white">
            <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-sky-600">
                    Für Alina
                </p>

                <h1 className="mt-4 font-[family:var(--font-heading)] text-5xl font-bold text-slate-900 sm:text-7xl">
                    Alles Gute zum Geburtstag ✨
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                    Eine kleine digitale Überraschung mit Erinnerungen, lieben Worten und
                    einem besonderen Moment nur für dich.
                </p>

                <Countdown target="2026-08-04T00:00:00+02:00" />

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <a
                        href="#momente"
                        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
                    >
                        Überraschung starten
                    </a>

                    <Link
                        href="/gallery"
                        className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:scale-[1.02] hover:bg-sky-50"
                    >
                        Zur Galerie
                    </Link>
                    <Link
                        href="/quiz"
                        className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:scale-[1.02] hover:bg-sky-50"
                    >
                        Zum Quiz
                    </Link>
                </div>
            </section>

            <section id="momente" className="mx-auto max-w-5xl px-6 py-20">
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

            <section className="mx-auto max-w-4xl px-6 py-10">
                <Letter title="Ein Brief für dich" text={letterText} />
            </section>

            <section className="mx-auto max-w-4xl px-6 py-16 text-center">
                <p className="mb-6 text-sm uppercase tracking-[0.3em] text-sky-600">
                    Noch eine Kleinigkeit
                </p>
                <SurpriseButton />
            </section>
        </main>
    )
}