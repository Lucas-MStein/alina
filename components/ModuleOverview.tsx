'use client'

import Link from 'next/link'
import type { ComponentType, ReactNode, SVGProps } from 'react'
import {
    ArrowRightIcon,
    BrainIcon,
    CalendarIcon,
    GiftIcon,
    ImageIcon,
    LockIcon,
    MessageIcon,
    UnlockIcon,
} from './Icons'
import StatusBadge from './StatusBadge'
import { modules, type ModuleDefinition } from '@/lib/content'
import { REVEAL_DATES, formatGermanDate, isUnlocked } from '@/lib/reveal'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const ICONS: Record<ModuleDefinition['icon'], IconComponent> = {
    image: ImageIcon,
    brain: BrainIcon,
    message: MessageIcon,
    gift: GiftIcon,
}

type ModuleStatus = 'unlocked' | 'scheduled' | 'locked'

function scrollToId(id: string) {
    const target = document.getElementById(id)
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

type ModuleCardProps = {
    module: ModuleDefinition
    status: ModuleStatus
    unlockLabel: string
}

function ModuleCard({ module, status, unlockLabel }: ModuleCardProps) {
    const Icon = ICONS[module.icon]
    const isUnlockedStatus = status === 'unlocked'

    const iconWrapperClasses = isUnlockedStatus
        ? 'bg-sky-100 text-sky-600 group-hover:bg-sky-500 group-hover:text-white'
        : 'bg-slate-200/60 text-slate-400'

    const cardClasses = isUnlockedStatus
        ? 'group cursor-pointer bg-white border-sky-200 hover:border-sky-400 hover:shadow-[0_8px_30px_-12px_rgba(14,165,233,0.3)]'
        : 'bg-slate-50/80 border-slate-200/60 opacity-90 cursor-not-allowed'

    const badge: ReactNode =
        status === 'unlocked' ? (
            <StatusBadge tone="success" icon={<UnlockIcon className="h-2.5 w-2.5" />}>
                Unlocked
            </StatusBadge>
        ) : status === 'scheduled' ? (
            <StatusBadge tone="accent" icon={<CalendarIcon className="h-2.5 w-2.5" />}>
                Scheduled
            </StatusBadge>
        ) : (
            <StatusBadge tone="neutral" icon={<LockIcon className="h-2.5 w-2.5" />}>
                Locked
            </StatusBadge>
        )

    const inner = (
        <>
            <div className="mb-5 flex items-start justify-between">
                <div
                    className={`rounded-xl p-3 transition-colors ${iconWrapperClasses}`}
                >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                {badge}
            </div>

            <h3
                className={`mb-2 text-xl font-bold ${isUnlockedStatus ? 'text-slate-800' : 'text-slate-500'}`}
            >
                {module.title}
            </h3>

            <p
                className={`mb-8 flex-grow text-sm leading-relaxed ${isUnlockedStatus ? 'text-slate-600' : 'text-slate-400'}`}
            >
                {module.description}
            </p>

            <div
                className={`border-t pt-4 font-[family:var(--font-mono)] text-xs font-bold ${
                    isUnlockedStatus
                        ? 'border-sky-100 text-sky-600'
                        : 'border-slate-200/50 text-slate-400'
                }`}
            >
                {unlockLabel}
            </div>

            {isUnlockedStatus && (
                <div className="pointer-events-none absolute bottom-6 right-6 translate-x-4 text-sky-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <ArrowRightIcon className="h-5 w-5" />
                </div>
            )}
        </>
    )

    const commonClasses = `relative flex h-full flex-col rounded-[1.5rem] border p-6 text-left transition-all duration-300 ${cardClasses}`

    if (!isUnlockedStatus) {
        return (
            <div className={commonClasses} aria-disabled="true">
                {inner}
            </div>
        )
    }

    if (module.href) {
        return (
            <Link href={module.href} className={commonClasses}>
                {inner}
            </Link>
        )
    }

    if (module.action === 'scroll') {
        return (
            <button
                type="button"
                onClick={() => scrollToId(module.key)}
                className={`${commonClasses} text-left`}
            >
                {inner}
            </button>
        )
    }

    return <div className={commonClasses}>{inner}</div>
}

export default function ModuleOverview() {
    const nextLockedKey = [...modules]
        .filter((m) => !isUnlocked(m.key, REVEAL_DATES[m.key]))
        .sort(
            (a, b) =>
                new Date(REVEAL_DATES[a.key]).getTime() -
                new Date(REVEAL_DATES[b.key]).getTime(),
        )[0]?.key

    return (
        <section className="space-y-8">
            <div className="flex items-center gap-3">
                <div className="rounded-xl bg-sky-100 p-2.5 text-sky-600">
                    <BrainIcon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-800">
                    System Module
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {modules.map((module) => {
                    const unlocked = isUnlocked(module.key, REVEAL_DATES[module.key])
                    const isNext = !unlocked && module.key === nextLockedKey

                    const status: ModuleStatus = unlocked
                        ? 'unlocked'
                        : isNext
                          ? 'scheduled'
                          : 'locked'

                    const unlockLabel = unlocked
                        ? 'Verfügbar'
                        : formatGermanDate(REVEAL_DATES[module.key])

                    return (
                        <ModuleCard
                            key={module.key}
                            module={module}
                            status={status}
                            unlockLabel={unlockLabel}
                        />
                    )
                })}
            </div>
        </section>
    )
}
