'use client'

import { useState } from 'react'

function SpotifyIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
        >
            <path d="M12 1.5a10.5 10.5 0 1 0 10.5 10.5A10.512 10.512 0 0 0 12 1.5Zm4.818 15.14a.655.655 0 0 1-.902.217 9.984 9.984 0 0 0-5.345-1.372 14.2 14.2 0 0 0-2.912.344.655.655 0 1 1-.272-1.281 15.486 15.486 0 0 1 3.184-.374 11.257 11.257 0 0 1 6.03 1.564.655.655 0 0 1 .217.902Zm1.288-2.866a.817.817 0 0 1-1.124.271 12.614 12.614 0 0 0-6.516-1.687 17.534 17.534 0 0 0-3.407.405.818.818 0 0 1-.329-1.602 18.79 18.79 0 0 1 3.736-.443 14.115 14.115 0 0 1 7.339 1.92.818.818 0 0 1 .301 1.136Zm.11-2.985a15.31 15.31 0 0 0-7.738-1.972 20.124 20.124 0 0 0-4.02.476.982.982 0 1 1-.392-1.924 21.851 21.851 0 0 1 4.412-.522 16.986 16.986 0 0 1 8.737 2.245.981.981 0 1 1-.999 1.697Z" />
        </svg>
    )
}

export default function SurpriseButton() {
    const [revealed, setRevealed] = useState(false)

    const spotifyUrl = 'https://open.spotify.com/track/DEINE_SPOTIFY_ID'

    return (
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            {!revealed ? (
                <>
                    <h3 className="text-2xl font-semibold text-slate-900">
                        Bereit für die Überraschung?
                    </h3>

                    <button
                        type="button"
                        onClick={() => setRevealed(true)}
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-sky-200 transition duration-200 hover:scale-[1.02] hover:bg-sky-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-sky-200"
                    >
                        Überraschung öffnen
                    </button>
                </>
            ) : (
                <div className="animate-in fade-in zoom-in duration-500 flex justify-center">
                    <a
                        href={spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition duration-200 hover:scale-[1.03] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-slate-200"
                    >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DB954] text-white shadow-inner">
              <SpotifyIcon />
            </span>
                        <span>Auf Spotify anhören</span>
                    </a>
                </div>
            )}
        </div>
    )
}