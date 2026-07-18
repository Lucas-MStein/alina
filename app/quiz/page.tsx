import BackLink from '@/components/BackLink'
import QuizClient from '@/components/QuizClient'
import StatusBadge from '@/components/StatusBadge'
import TermsFooter from '@/components/TermsFooter'
import TopNav from '@/components/TopNav'
import { BrainIcon } from '@/components/Icons'
import { quizQuestions } from '@/lib/content'

export default function QuizPage() {
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

            <main className="relative z-10 mx-auto max-w-3xl space-y-12 px-4 py-8 sm:px-6 md:py-12 lg:px-8">
                <div className="space-y-8">
                    <BackLink />

                    <section className="space-y-6 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/50 bg-sky-100/50 px-3 py-1 font-[family:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-sky-700">
                            Module · Diagnostic
                        </div>

                        <h1 className="text-5xl font-extrabold tracking-tighter text-slate-900 sm:text-6xl md:text-7xl">
                            System{' '}
                            <span className="bg-gradient-to-br from-sky-400 to-blue-600 bg-clip-text text-transparent">
                                Check
                            </span>
                        </h1>

                        <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-slate-500 sm:text-lg">
                            Ein kleiner Diagnostiktest über unsere Erinnerungen, Momente und
                            Dinge, die einfach zu uns passen.
                        </p>
                    </section>
                </div>

                <section className="space-y-6">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-sky-100 p-2.5 text-sky-600">
                                <BrainIcon className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                                Diagnostic
                            </h2>
                        </div>

                        <StatusBadge tone="info">
                            {quizQuestions.length} tests
                        </StatusBadge>
                    </div>

                    <QuizClient questions={quizQuestions} />
                </section>
            </main>

            <TermsFooter />
        </div>
    )
}
