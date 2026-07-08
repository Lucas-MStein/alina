'use client'

import { useEffect, useMemo, useState } from 'react'

type CountdownProps = {
    target: string
    title?: string
    expiredText?: string
    className?: string
    variant?: 'default' | 'embedded'
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
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 px-3 py-4 shadow-inner sm:p-4">
            <div className="font-[family:var(--font-mono)] text-3xl font-bold leading-none tracking-tighter text-slate-800 tabular-nums sm:text-5xl">
                {value}
            </div>
            <div className="mt-2 font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
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
                                      variant = 'default',
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
                className={`w-full rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-700 ${className}`}
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
                className={`w-full rounded-2xl bg-slate-900 px-6 py-5 text-center text-white shadow-lg ${className}`}
            >
                <p className="font-[family:var(--font-mono)] text-xs font-bold uppercase tracking-[0.28em] text-white/60">
                    Countdown
                </p>
                <p className="mt-2 text-xl font-semibold sm:text-2xl">{expiredText}</p>
            </div>
        )
    }

    const items = [
        { label: 'Tage', value: loading ? '--' : String(current.days) },
        { label: 'Stunden', value: loading ? '--' : pad(current.hours) },
        { label: 'Minuten', value: loading ? '--' : pad(current.minutes) },
        { label: 'Sekunden', value: loading ? '--' : pad(current.seconds) },
    ]

    if (variant === 'embedded') {
        return (
            <div
                className={`grid grid-cols-4 gap-2 sm:gap-4 ${className}`}
                aria-label="Geburtstags-Countdown"
            >
                {items.map((item) => (
                    <CountdownCard
                        key={item.label}
                        value={item.value}
                        label={item.label}
                    />
                ))}
            </div>
        )
    }

    return (
        <section
            className={`w-full max-w-3xl ${className}`}
            aria-label="Geburtstags-Countdown"
        >
            <p className="mb-3 font-[family:var(--font-mono)] text-xs font-bold uppercase tracking-[0.28em] text-sky-600 sm:mb-4">
                {title}
            </p>

            <div className="grid grid-cols-4 gap-2 sm:gap-4">
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