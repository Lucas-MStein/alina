'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'

type DiscoveryState = 'initial' | 'answer' | 'solved'

function normalizeAnswer(value: string) {
    return value
        .trim()
        .toLocaleLowerCase('de-DE')
        .replace(/[.,!?'"„“”’\-–—_]/g, '')
        .replace(/\s+/g, '')
}

export default function LetterEasterEgg() {
    const [discoveryState, setDiscoveryState] =
        useState<DiscoveryState>('initial')
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState('')
    const [attempts, setAttempts] = useState(0)

    const correctAnswer = normalizeAnswer('Du bist gut genug')

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const normalizedAnswer = normalizeAnswer(answer)

        if (!normalizedAnswer) {
            setError('Du musst schon etwas eingeben. 😄')
            return
        }

        if (normalizedAnswer === correctAnswer) {
            setError('')
            setDiscoveryState('solved')
            return
        }

        const nextAttempts = attempts + 1

        setAttempts(nextAttempts)
        setError(
            nextAttempts >= 2
                ? 'Fast. Schau dir einmal die Anfangsbuchstaben der Absätze an.'
                : 'Das war noch nicht die versteckte Nachricht. Versuch es noch einmal.',
        )
    }

    function handleNo() {
        setDiscoveryState('answer')
        setError(
            'Kleiner Hinweis: Manchmal sagen die Anfänge mehr als der ganze Rest.',
        )
    }

    if (discoveryState === 'solved') {
        return (
            <section className="mt-8 overflow-hidden rounded-[2rem] border border-sky-200 bg-sky-50 p-5 text-center sm:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-sky-600">
                    Easter Egg gefunden
                </p>

                <h3 className="mt-3 font-[family:var(--font-heading)] text-3xl font-semibold text-slate-900 sm:text-4xl">
                    Du bist gut genug. 💙
                </h3>

                <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
                    Richtig erkannt. Und das steht dort nicht nur wegen des
                    Songs, sondern weil ich möchte, dass du es auch wirklich
                    glaubst.
                </p>

                <div className="relative mx-auto mt-6 aspect-video w-full max-w-lg overflow-hidden rounded-3xl bg-white ring-1 ring-sky-200">
                    <Image
                        src="/photos/blumengarten-gut-genug.gif"
                        alt="Blumengarten – Du bist gut genug"
                        fill
                        unoptimized
                        className="object-cover"
                    />
                </div>
            </section>
        )
    }

    return (
        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            {discoveryState === 'initial' ? (
                <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-sky-600">
                        Kleine Frage
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                        Ist dir etwas aufgefallen?
                    </h3>

                    <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={() => setDiscoveryState('answer')}
                            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-200"
                        >
                            Ja, ich glaube schon
                        </button>

                        <button
                            type="button"
                            onClick={handleNo}
                            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-100"
                        >
                            Noch nicht
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label
                        htmlFor="hidden-message"
                        className="block text-center"
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-sky-600">
                            Versteckte Botschaft
                        </span>

                        <span className="mt-3 block text-2xl font-semibold text-slate-900">
                            Welche Nachricht hast du entdeckt?
                        </span>
                    </label>

                    <div className="mx-auto mt-6 max-w-xl">
                        <input
                            id="hidden-message"
                            type="text"
                            value={answer}
                            onChange={(event) => {
                                setAnswer(event.target.value)
                                setError('')
                            }}
                            placeholder="Deine Antwort …"
                            autoComplete="off"
                            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                        />

                        <button
                            type="submit"
                            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.01] hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
                        >
                            Antwort prüfen
                        </button>

                        {error && (
                            <p
                                className="mt-4 text-center text-sm leading-6 text-slate-500"
                                aria-live="polite"
                            >
                                {error}
                            </p>
                        )}
                    </div>
                </form>
            )}
        </section>
    )
}