'use client'

import { useMemo, useState } from 'react'

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
    const progress = useMemo(() => {
        return `${currentIndex + 1} von ${questions.length}`
    }, [currentIndex, questions.length])

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
        return (
            <section className="rounded-[2rem] bg-white p-8 text-center shadow-sm ring-1 ring-slate-200 sm:p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
                    Ergebnis
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                    {score} / {questions.length} richtig
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                    Ganz ehrlich: Eigentlich ist das Ergebnis gar nicht das Wichtigste.
                    Die schönsten Antworten sind sowieso unsere gemeinsamen Erinnerungen. 💙
                </p>

                <button
                    type="button"
                    onClick={handleRestart}
                    className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
                >
                    Nochmal spielen
                </button>
            </section>
        )
    }

    return (
        <section className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
            <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
                    Frage {progress}
                </p>
                <div className="h-2 w-28 overflow-hidden rounded-full bg-sky-100">
                    <div
                        className="h-full rounded-full bg-sky-500 transition-all duration-300"
                        style={{
                            width: `${((currentIndex + 1) / questions.length) * 100}%`,
                        }}
                    />
                </div>
            </div>

            <h2 className="mt-6 text-2xl font-semibold leading-9 text-slate-900">
                {currentQuestion.question}
            </h2>

            <div className="mt-8 grid gap-4">
                {currentQuestion.answers.map((answer, index) => {
                    const isSelected = selectedIndex === index
                    const isCorrect = index === currentQuestion.correctIndex
                    const showCorrect = selectedIndex !== null && isCorrect
                    const showWrong = selectedIndex !== null && isSelected && !isCorrect

                    return (
                        <button
                            key={answer}
                            type="button"
                            onClick={() => handleAnswer(index)}
                            disabled={selectedIndex !== null}
                            className={[
                                'rounded-2xl border px-5 py-4 text-left text-base transition',
                                'focus:outline-none focus:ring-4 focus:ring-sky-100',
                                showCorrect
                                    ? 'border-sky-500 bg-sky-50 text-slate-900'
                                    : showWrong
                                        ? 'border-slate-300 bg-slate-100 text-slate-500'
                                        : 'border-slate-200 bg-white text-slate-800 hover:border-sky-200 hover:bg-sky-50',
                            ].join(' ')}
                        >
                            {answer}
                        </button>
                    )
                })}
            </div>

            <div className="mt-8 flex justify-end">
                <button
                    type="button"
                    onClick={handleNext}
                    disabled={selectedIndex === null}
                    className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
                >
                    {currentIndex === questions.length - 1 ? 'Ergebnis ansehen' : 'Weiter'}
                </button>
            </div>
        </section>
    )
}