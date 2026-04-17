'use client'

import { useState } from 'react'

export default function SurpriseButton() {
    const [revealed, setRevealed] = useState(false)

    return (
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            {!revealed ? (
                <>
                    <h3 className="text-2xl font-semibold text-slate-900">
                        Bereit für die Überraschung?
                    </h3>
                    <p className="mt-3 text-slate-600">
                        Hier wartet noch eine letzte kleine Nachricht auf dich.
                    </p>

                    <button
                        type="button"
                        onClick={() => setRevealed(true)}
                        className="mt-6 rounded-full bg-sky-500 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-sky-600"
                    >
                        Überraschung öffnen
                    </button>
                </>
            ) : (
                <div className="animate-in fade-in zoom-in duration-500">
                    <p className="text-5xl">🎉💙✨</p>
                    <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                        Du bist etwas ganz Besonderes.
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                        Danke, dass es dich gibt. Ich hoffe, dein neues Lebensjahr wird
                        genauso schön, leicht und besonders wie du selbst.
                    </p>
                </div>
            )}
        </div>
    )
}