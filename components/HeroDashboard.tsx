import Link from 'next/link'
import Countdown from './Countdown'
import LockedSection from './LockedSection'
import StatusBadge from './StatusBadge'
import {
    ActivityIcon,
    CalendarIcon,
    LockIcon,
    MessageIcon,
} from './Icons'
import { REVEAL_DATES, formatGermanDate, isUnlocked } from '@/lib/reveal'

type HeroModuleButtonProps = {
    label: string
    href: string
    unlocked: boolean
    unlockDate: string
}

function HeroModuleButton({
    label,
    href,
    unlocked,
    unlockDate,
}: HeroModuleButtonProps) {
    if (unlocked) {
        return (
            <Link
                href={href}
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl border border-sky-200 bg-white py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-400 hover:bg-sky-50"
            >
                {label}
                <span className="rounded bg-sky-100 px-2 py-0.5 font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-wider text-sky-700">
                    Open
                </span>
            </Link>
        )
    }

    return (
        <div
            aria-disabled="true"
            title={`Freischaltung am ${formatGermanDate(unlockDate)}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 py-3.5 text-sm font-semibold text-slate-400"
        >
            {label}
            <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <LockIcon className="h-2.5 w-2.5" />
                Locked
            </span>
        </div>
    )
}

export default function HeroDashboard() {
    const galleryUnlocked = isUnlocked('gallery', REVEAL_DATES.gallery)
    const quizUnlocked = isUnlocked('quiz', REVEAL_DATES.quiz)
    const heroButtonsUnlocked = galleryUnlocked || quizUnlocked

    return (
        <section className="flex flex-col items-center space-y-10 text-center">
            <div className="max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/50 bg-sky-100/50 px-3 py-1 font-[family:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-sky-700">
                    Update Available
                </div>

                <h1 className="text-6xl font-extrabold tracking-tighter text-slate-900 sm:text-7xl md:text-8xl">
                    Alina{' '}
                    <span className="bg-gradient-to-br from-sky-400 to-blue-600 bg-clip-text text-transparent">
                        23.0
                    </span>
                </h1>

                <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-slate-500 sm:text-lg md:text-xl">
                    Ein kleines digitales Update mit Erinnerungen, Nachrichten und
                    Dingen, die ich dir nicht einfach nur per WhatsApp schicken
                    wollte.
                </p>
            </div>

            <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-sky-100/80 bg-white p-6 shadow-[0_8px_40px_-12px_rgba(14,165,233,0.15)] md:p-10">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-bl from-sky-100/50 to-transparent opacity-60 blur-3xl"
                />

                <div className="relative z-10 grid grid-cols-2 gap-6 text-left md:grid-cols-4 md:gap-8">
                    <div className="flex flex-col items-start space-y-1.5">
                        <span className="flex items-center gap-1.5 font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            <ActivityIcon className="h-3 w-3" />
                            Status
                        </span>
                        <StatusBadge tone="success">Update ready</StatusBadge>
                    </div>

                    <div className="flex flex-col items-start space-y-1.5">
                        <span className="flex items-center gap-1.5 font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            <CalendarIcon className="h-3 w-3" />
                            Release
                        </span>
                        <span className="font-[family:var(--font-mono)] text-sm font-semibold text-slate-700">
                            04.08.2026
                        </span>
                    </div>

                    <div className="flex flex-col items-start space-y-1.5">
                        <span className="flex items-center gap-1.5 font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            <LockIcon className="h-3 w-3" />
                            Module
                        </span>
                        <StatusBadge tone="warning">
                            {galleryUnlocked && quizUnlocked
                                ? 'Unlocked'
                                : heroButtonsUnlocked
                                  ? 'Partial unlock'
                                  : 'Locked'}
                        </StatusBadge>
                    </div>

                    <div className="flex flex-col items-start space-y-1.5">
                        <span className="flex items-center gap-1.5 font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            <MessageIcon className="h-3 w-3" />
                            Nachricht
                        </span>
                        <StatusBadge tone="info">1 ungelesen</StatusBadge>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="my-8 h-px w-full bg-gradient-to-r from-transparent via-sky-100 to-transparent"
                />

                <Countdown
                    target="2026-08-04T00:00:00+02:00"
                    variant="embedded"
                    className="mb-8"
                />

                <LockedSection
                    unlocked={heroButtonsUnlocked}
                    unlockDate={REVEAL_DATES.gallery}
                    title="Bald geht es weiter"
                    variant="compact"
                >
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <HeroModuleButton
                            label="Galerie"
                            href="/gallery"
                            unlocked={galleryUnlocked}
                            unlockDate={REVEAL_DATES.gallery}
                        />
                        <HeroModuleButton
                            label="Quiz"
                            href="/quiz"
                            unlocked={quizUnlocked}
                            unlockDate={REVEAL_DATES.quiz}
                        />
                    </div>
                </LockedSection>
            </div>
        </section>
    )
}
