import HeroDashboard from '@/components/HeroDashboard'
import ReleaseNotes from '@/components/ReleaseNotes'
import ModuleOverview from '@/components/ModuleOverview'
import Letter from '@/components/Letter'
import LockedSection from '@/components/LockedSection'
import MessageBubble from '@/components/MessageBubble'
import SurpriseButton from '@/components/SurpriseButton'
import TermsFooter from '@/components/TermsFooter'
import TopNav from '@/components/TopNav'
import { letterText } from '@/lib/content'
import { REVEAL_DATES, isUnlocked } from '@/lib/reveal'

export const revalidate = 60

export default function Home() {
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

            <TopNav />

            <main className="relative z-10 mx-auto max-w-5xl space-y-24 px-4 py-12 sm:space-y-32 sm:px-6 md:py-20 lg:px-8">
                <HeroDashboard />

                <ReleaseNotes />

                <ModuleOverview />

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
