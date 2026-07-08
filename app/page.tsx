import HeroDashboard from '@/components/HeroDashboard'
import ReleaseNotes from '@/components/ReleaseNotes'
import ModuleOverview from '@/components/ModuleOverview'
import Letter from '@/components/Letter'
import LockedSection from '@/components/LockedSection'
import MemoryCards from '@/components/MemoryCards'
import MessageBubble from '@/components/MessageBubble'
import SurpriseButton from '@/components/SurpriseButton'
import TermsFooter from '@/components/TermsFooter'
import { HeartIcon, TerminalIcon } from '@/components/Icons'
import { letterText, memories } from '@/lib/content'
import { REVEAL_DATES, isUnlocked } from '@/lib/reveal'

export default function Home() {
    const memoriesUnlocked = isUnlocked('memories', REVEAL_DATES.memories)
    const letterUnlocked = isUnlocked('letter', REVEAL_DATES.letter)
    const surpriseUnlocked = isUnlocked('surprise', REVEAL_DATES.surprise)

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[#FAFCFF] pb-24 md:pb-0">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-sky-100/50 blur-[120px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-10%] top-[20%] h-[40%] w-[40%] rounded-full bg-blue-50/60 blur-[100px]"
            />

            <nav className="sticky top-0 z-40 flex w-full items-center justify-between border-b border-sky-100/50 bg-white/60 px-4 py-4 backdrop-blur-md sm:px-6">
                <div className="flex items-center gap-2 text-slate-700">
                    <TerminalIcon className="h-4 w-4 text-sky-500" />
                    <span className="font-[family:var(--font-mono)] text-sm font-medium">
                        alinaist23.de
                    </span>
                </div>

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

            <main className="relative z-10 mx-auto max-w-5xl space-y-24 px-4 py-12 sm:space-y-32 sm:px-6 md:py-20 lg:px-8">
                <HeroDashboard />

                <ReleaseNotes />

                <ModuleOverview />

                <section id="memories" className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-rose-100 p-2.5 text-rose-500">
                            <HeartIcon className="h-6 w-6" />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-800">
                            Memory Archive
                        </h2>
                    </div>

                    <LockedSection
                        unlocked={memoriesUnlocked}
                        unlockDate={REVEAL_DATES.memories}
                        title="Erinnerungen werden bald freigeschaltet"
                    >
                        <MemoryCards memories={memories} />
                    </LockedSection>
                </section>

                <section id="letter">
                    <LockedSection
                        unlocked={letterUnlocked}
                        unlockDate={REVEAL_DATES.letter}
                        title="Der Brief kommt später"
                    >
                        <Letter title="Ein Brief für dich" text={letterText} />
                    </LockedSection>
                </section>

                <section id="surprise">
                    <LockedSection
                        unlocked={surpriseUnlocked}
                        unlockDate={REVEAL_DATES.surprise}
                        title="Die letzte Überraschung wartet noch"
                    >
                        <div className="text-center">
                            <p className="mb-6 font-[family:var(--font-mono)] text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
                                Noch eine Kleinigkeit
                            </p>
                            <SurpriseButton />
                        </div>
                    </LockedSection>
                </section>
            </main>

            <TermsFooter />
            <MessageBubble />
        </div>
    )
}
