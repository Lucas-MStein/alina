'use client'

import { useState } from 'react'

function HeartIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
        >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
    )
}

export default function TermsFooter() {
    const [isOpen, setIsOpen] = useState(false)
    const [accepted, setAccepted] = useState(false)

    function handleAccept() {
        setAccepted(true)
        setIsOpen(false)
    }

    return (
        <>
            <footer className="mx-auto max-w-5xl px-5 pb-10 pt-4 text-center sm:px-6">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="text-xs text-slate-400 underline-offset-4 transition hover:text-sky-600 hover:underline"
                >
                    AGB
                </button>

                {accepted && (
                    <p className="mt-3 text-xs text-slate-500">
                        AGB akzeptiert. Status wird intern verarbeitet. 💙
                    </p>
                )}
            </footer>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-5 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="terms-title"
                >
                    <div className="w-full max-w-lg overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200">
                        <div className="border-b border-slate-200 px-6 py-5">
                            <p className="text-xs uppercase tracking-[0.3em] text-sky-600">
                                alinaist23.de
                            </p>

                            <h2
                                id="terms-title"
                                className="mt-2 text-2xl font-semibold text-slate-900"
                            >
                                Allgemeine Beziehungsbedingungen
                            </h2>
                        </div>

                        <div className="max-h-[65vh] space-y-5 overflow-y-auto px-6 py-6 text-left text-slate-700">
                            <p className="leading-7">
                                Mit Klick auf „Ich akzeptiere“ bestätigst du, dass du
                                freiwillig und bei vollem Bewusstsein zustimmst, meine
                                Freundin zu sein.
                            </p>

                            <div className="rounded-3xl bg-sky-50 p-5 ring-1 ring-sky-100">
                                <h3 className="font-semibold text-slate-900">
                                    Leistungsumfang
                                </h3>

                                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                                    <li>• spontane Umarmungen</li>
                                    <li>• unnötig viele Komplimente</li>
                                    <li>• gemeinsame Erinnerungen</li>
                                    <li>• Insider, die niemand sonst versteht</li>
                                    <li>• Unterstützung bei guten und schlechten Tagen</li>
                                    <li>• mich als festen Bestandteil deines Lebens</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    Laufzeit
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Unbefristet. Eine Kündigung ist aus technischen Gründen
                                    aktuell nicht vorgesehen.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    Nebenwirkungen
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Kann Herzklopfen, Lächeln ohne Grund, spontane
                                    Glücksgefühle und das Bedürfnis nach gemeinsamen Plänen
                                    verursachen.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    Schlussbestimmung
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Diese Vereinbarung tritt mit sofortiger Wirkung in Kraft,
                                    sobald du auf den blauen Button klickst.
                                </p>
                            </div>

                            <div className="rounded-3xl bg-slate-900 p-5 text-white">
                                <p className="text-sm leading-6 text-white/80">
                                    Wichtigste Klausel: Ich mag dich sehr. Und deshalb frage
                                    ich dich jetzt ganz offiziell:
                                </p>

                                <p className="mt-3 text-xl font-semibold">
                                    Willst du meine Freundin sein?
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 border-t border-slate-200 px-6 py-5 sm:flex-row sm:justify-end">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                            >
                                Ich muss kurz überlegen
                            </button>

                            <button
                                type="button"
                                onClick={handleAccept}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:scale-[1.02] hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-200"
                            >
                                <HeartIcon />
                                Ich akzeptiere
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}