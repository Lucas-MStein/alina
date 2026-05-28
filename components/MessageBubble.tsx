'use client'

import { useState } from 'react'

function MessageIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a8.38 8.38 0 0 1-.9 3.8A8.5 8.5 0 0 1 12.5 20a8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.5 8.5 0 0 1 21 12Z"
            />
        </svg>
    )
}

export default function MessageBubble() {
    const [isOpen, setIsOpen] = useState(false)
    const [hasOpened, setHasOpened] = useState(false)

    function openMessage() {
        setIsOpen(true)
        setHasOpened(true)
    }

    return (
        <>
            <button
                type="button"
                onClick={openMessage}
                className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-transparent p-0 text-sm font-semibold text-white transition hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-sky-200 sm:bg-slate-900 sm:px-4 sm:py-3 sm:shadow-xl sm:shadow-slate-300 sm:hover:bg-slate-800"
                aria-label="Nachricht öffnen"
            >
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white">
                    <MessageIcon />

                    {!hasOpened && (
                        <span className="absolute -right-1 -top-1 flex h-4 w-4">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-75" />
                            <span className="relative inline-flex h-4 w-4 rounded-full bg-sky-400 ring-2 ring-white" />
                        </span>
                    )}
                </span>

                <span className="hidden sm:inline">
                    {hasOpened ? 'Nachricht' : '1 ungelesene Nachricht'}
                </span>
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-5 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="message-title"
                >
                    <div className="flex max-h-[calc(100dvh-3rem)] w-full max-w-xl flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200">
                        <div className="shrink-0 border-b border-slate-200 px-5 py-5 sm:px-7 sm:py-6">
                            <p className="text-xs uppercase tracking-[0.3em] text-sky-600">
                                Neue Nachricht
                            </p>

                            <h2
                                id="message-title"
                                className="mt-2 font-[family:var(--font-heading)] text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl"
                            >
                                Eine Nachricht für dich
                            </h2>
                        </div>

                        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 text-left text-sm leading-7 text-slate-600 sm:px-7 sm:py-6 sm:text-base">
                            <p>
                                Sorry dafür, dass ich gestern so plötzlich aufgelegt habe.
                                Mir war es dann alles etwas zu viel und ich weiß auch, dass
                                Wegrennen keine Option ist.
                            </p>

                            <p>
                                Gerade in solchen Situationen sollte ich für dich da sein und
                                dich unterstützen.
                            </p>

                            <p>
                                Ich verstehe auch, dass es sich nicht gut anfühlt, wenn alles
                                nur noch aus Planung besteht. Um wenigstens diese Planung etwas
                                leichtgewichtiger zu gestalten, habe ich unseren gemeinsamen
                                Kalender erstellt und ich hoffe, dass dieser seinen Zweck erfüllt.
                            </p>

                            <p>
                                Und ich glaube, das Schwierige an unserer Situation ist nicht,
                                dass wir uns nicht guttun — eher das Gegenteil. Du hast mir ja
                                selbst gesagt, dass ich dir gut tue und genau das bedeutet mir
                                extrem viel.
                            </p>

                            <p>
                                Aber manchmal fühlt es sich für mich so an, als wärst du in
                                einer Situation, die dir eigentlich total gut tut, die dir
                                gleichzeitig aber auch viel abverlangt.
                            </p>

                            <p>
                                Und ehrlich gesagt macht mich genau das traurig, weil ich nie
                                das Gefühl haben will, dass du dich zwischen mir und deinem
                                restlichen Leben entscheiden musst. Ich will nicht der Grund
                                sein, warum andere wichtige Dinge für dich zu kurz kommen. Das
                                ändert nichts daran, wie schön sich das mit dir anfühlt — aber
                                ich verstehe inzwischen besser, warum dich diese Situation
                                manchmal belastet. 💙
                            </p>
                        </div>

                        <div className="shrink-0 border-t border-slate-200 bg-white px-5 py-4 sm:px-7">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:scale-[1.02] hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-200 sm:w-auto"
                            >
                                Nachricht schließen
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}