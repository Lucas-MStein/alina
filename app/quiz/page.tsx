import Link from 'next/link'
import QuizClient from '@/components/QuizClient'
import { quizQuestions } from '@/lib/content'

export default function QuizPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white px-6 py-16">
            <div className="mx-auto max-w-3xl">
                <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-sky-600">
                        Quiz
                    </p>

                    <h1 className="mt-4 font-[family:var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-6xl">
                        Wie gut kennst du uns? 💙
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        Ein kleines Quiz mit Fragen über unsere Erinnerungen, Momente und
                        Dinge, die einfach zu uns passen.
                    </p>

                    <Link
                        href="/"
                        className="mt-8 inline-flex rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:scale-[1.02] hover:bg-sky-50"
                    >
                        Zurück zur Startseite
                    </Link>
                </div>

                <div className="mt-12">
                    <QuizClient questions={quizQuestions} />
                </div>
            </div>
        </main>
    )
}