'use client'

import { useMemo, useState } from 'react'
import StatusBadge from './StatusBadge'
import {
    AlertCircleIcon,
    CheckCircleIcon,
} from './Icons'

type QuizQuestion = {
    question: string
    answers: string[]
    correctIndex: number
}

type QuizClientProps = {
    questions: QuizQuestion[]
}

export default function QuizClient({ questions }: QuizClientProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const [score, setScore] = useState(0)
    const [finished, setFinished] = useState(false)

    const currentQuestion = questions[currentIndex]
    const progressLabel = useMemo(() => {
        const total = String(questions.length).padStart(2, '0')
        const current = String(currentIndex + 1).padStart(2, '0')
        return `${current} / ${total}`
    }, [currentIndex, questions.length])
    const progressPercent = ((currentIndex + 1) / questions.length) * 100

    function handleAnswer(index: number) {
        if (selectedIndex !== null) return

        setSelectedIndex(index)

        if (index === currentQuestion.correctIndex) {
            setScore((prev) => prev + 1)
        }
    }

    function handleNext() {
        if (selectedIndex === null) return

        const isLastQuestion = currentIndex === questions.length - 1

        if (isLastQuestion) {
            setFinished(true)
            return
        }

        setCurrentIndex((prev) => prev + 1)
        setSelectedIndex(null)
    }

    function handleRestart() {
        setCurrentIndex(0)
        setSelectedIndex(null)
        setScore(0)
        setFinished(false)
    }

    if (finished) {
        const passed = score === questions.length
        const scorePercent = Math.round((score / questions.length) * 100)

        return (
            <section className="relative overflow-hidden rounded-[2rem] border border-sky-100/80 bg-white p-6 shadow-[0_8px_40px_-12px_rgba(14,165,233,0.15)] sm:p-10">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-bl from-sky-100/50 to-transparent opacity-60 blur-3xl"
                />

                <div className="relative z-10 text-center">
                    <StatusBadge
                        tone={passed ? 'success' : 'accent'}
                        icon={<CheckCircleIcon className="h-2.5 w-2.5" />}
                    >
                        Diagnostic Complete
                    </StatusBadge>

                    <h2 className="mt-6 text-4xl font-extrabold tracking-tighter text-slate-900 sm:text-5xl">
                        {score}
                        <span className="text-slate-300"> / </span>
                        {questions.length}
                    </h2>

                    <p className="mt-2 font-[family:var(--font-mono)] text-xs font-bold uppercase tracking-widest text-sky-600">
                        Score {scorePercent}%
                    </p>

                    <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
                        Ganz ehrlich: Eigentlich ist das Ergebnis gar nicht das
                        Wichtigste. Die schönsten Antworten sind sowieso unsere
                        gemeinsamen Erinnerungen. 💙
                    </p>

                    <button
                        type="button"
                        onClick={handleRestart}
                        className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-400 hover:bg-sky-50"
                    >
                        Retry Diagnostic
                        <span className="rounded bg-sky-100 px-2 py-0.5 font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-wider text-sky-700">
                            Reset
                        </span>
                    </button>
                </div>
            </section>
        )
    }

    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-sky-100/80 bg-white p-6 shadow-[0_8px_40px_-12px_rgba(14,165,233,0.15)] sm:p-10">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-bl from-sky-100/50 to-transparent opacity-60 blur-3xl"
            />

            <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                    <span className="font-[family:var(--font-mono)] text-[11px] font-bold uppercase tracking-widest text-sky-600">
                        Test {progressLabel}
                    </span>

                    <div className="flex flex-1 items-center gap-3">
                        <div
                            className="h-1.5 flex-1 overflow-hidden rounded-full bg-sky-100"
                            role="progressbar"
                            aria-valuenow={progressPercent}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        >
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-300"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                        <span className="font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            {Math.round(progressPercent)}%
                        </span>
                    </div>
                </div>

                <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-slate-900 sm:text-3xl">
                    {currentQuestion.question}
                </h2>

                <div className="mt-8 grid gap-3">
                    {currentQuestion.answers.map((answer, index) => {
                        const isSelected = selectedIndex === index
                        const isCorrect = index === currentQuestion.correctIndex
                        const revealed = selectedIndex !== null
                        const showCorrect = revealed && isCorrect
                        const showWrong = revealed && isSelected && !isCorrect
                        const optionLabel = String.fromCharCode(65 + index)

                        return (
                            <button
                                key={answer}
                                type="button"
                                onClick={() => handleAnswer(index)}
                                disabled={revealed}
                                className={[
                                    'group flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-colors focus:outline-none focus:ring-4 focus:ring-sky-100 sm:text-base',
                                    showCorrect
                                        ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                                        : showWrong
                                            ? 'border-amber-300 bg-amber-50 text-amber-900'
                                            : revealed
                                                ? 'cursor-not-allowed border-slate-200 bg-white text-slate-400'
                                                : 'border-sky-200 bg-white text-slate-800 hover:border-sky-400 hover:bg-sky-50',
                                ].join(' ')}
                            >
                                <span className="flex items-center gap-3">
                                    <span
                                        className={[
                                            'flex h-7 w-7 flex-none items-center justify-center rounded-md font-[family:var(--font-mono)] text-[11px] font-bold uppercase tracking-wider',
                                            showCorrect
                                                ? 'bg-emerald-100 text-emerald-700'
                                                : showWrong
                                                    ? 'bg-amber-100 text-amber-700'
                                                    : 'bg-sky-100 text-sky-700',
                                        ].join(' ')}
                                    >
                                        {optionLabel}
                                    </span>
                                    <span>{answer}</span>
                                </span>

                                {showCorrect && (
                                    <CheckCircleIcon className="h-5 w-5 flex-none text-emerald-600" />
                                )}
                                {showWrong && (
                                    <AlertCircleIcon className="h-5 w-5 flex-none text-amber-600" />
                                )}
                            </button>
                        )
                    })}
                </div>

                <div className="mt-8 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {selectedIndex === null
                            ? 'Wähle eine Antwort'
                            : selectedIndex === currentQuestion.correctIndex
                                ? '✓ Korrekt geloggt'
                                : '⚠ Antwort verworfen'}
                    </span>

                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={selectedIndex === null}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-400 hover:bg-sky-50 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-400"
                    >
                        {currentIndex === questions.length - 1
                            ? 'Ergebnis ansehen'
                            : 'Nächste Frage'}
                        <span className="rounded bg-sky-100 px-2 py-0.5 font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-wider text-sky-700 group-disabled:bg-slate-100 group-disabled:text-slate-400">
                            {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}
