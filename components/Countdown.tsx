'use client'

import { useEffect, useMemo, useState } from 'react'

type CountdownProps = {
    target: string
    title?: string
    expiredText?: string
    className?: string
}

type TimeLeft = {
    total: number
    days: number
    hours: number
    minutes: number
    seconds: number
}

function getTimeLeft(targetMs: number): TimeLeft {
    const total = Math.max(0, targetMs - Date.now())

    return {
        total,
        days: Math.floor(total / (1000 * 60 * 60 * 24)),
        hours: Math.floor((total / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((total / (1000 * 60)) % 60),
        seconds: Math.floor((total / 1000) % 60),
    }
}

function pad(value: number) {
    return value.toString().padStart(2, '0')
}

function CountdownCard({
                           value,
                           label,
                       }: {
    value: string
    label: string
}) {
    return (
        <div className="rounded-3xl border border-sky-100 bg-white/80 p-4 shadow-sm backdrop-blur">
            <div className="text-3xl font-bold text-slate-900 sm:text-4xl">{value}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                {label}
            </div>
        </div>
    )
}

export default function Countdown({
                                      target,
                                      title = 'Noch bis zum Geburtstag',
                                      expiredText = 'Heute ist dein großer Tag 🎉',
                                      className = '',
                                  }: CountdownProps) {
    const targetMs = useMemo(() => new Date(target).getTime(), [target])
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

    useEffect(() => {
        if (Number.isNaN(targetMs)) return

        const tick = () => {
            setTimeLeft(getTimeLeft(targetMs))
        }

        tick()
        const intervalId = window.setInterval(tick, 1000)

        return () => {
            window.clearInterval(intervalId)
        }
    }, [targetMs])

    if (Number.isNaN(targetMs)) {
        return (
            <div
                className={`mt-8 rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-700 ${className}`}
            >
                Ungültiges Zieldatum.
            </div>
        )
    }

    const loading = timeLeft === null
    const current =
        timeLeft ?? { total: 1, days: 0, hours: 0, minutes: 0, seconds: 0 }

    if (!loading && current.total <= 0) {
        return (
            <div
                className={`mt-8 rounded-3xl bg-slate-900 px-6 py-5 text-center text-white shadow-lg ${className}`}
            >
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                    Countdown
                </p>
                <p className="mt-2 text-2xl font-semibold">{expiredText}</p>
            </div>
        )
    }

    const items = [
        { label: 'Tage', value: loading ? '--' : String(current.days) },
        { label: 'Stunden', value: loading ? '--' : pad(current.hours) },
        { label: 'Minuten', value: loading ? '--' : pad(current.minutes) },
        { label: 'Sekunden', value: loading ? '--' : pad(current.seconds) },
    ]

    return (
        <section
            className={`mt-10 w-full max-w-3xl ${className}`}
            aria-label="Geburtstags-Countdown"
        >
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-sky-600">
                {title}
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {items.map((item) => (
                    <CountdownCard
                        key={item.label}
                        value={item.value}
                        label={item.label}
                    />
                ))}
            </div>
        </section>
    )
}