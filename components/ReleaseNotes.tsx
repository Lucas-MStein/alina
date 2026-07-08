import type { ReactNode } from 'react'
import {
    AlertCircleIcon,
    ActivityIcon,
    CheckCircleIcon,
    FileTextIcon,
    InfoIcon,
} from './Icons'
import { releaseNotes, type ReleaseNote } from '@/lib/content'

const KIND_STYLES: Record<
    ReleaseNote['kind'],
    { icon: ReactNode; accent: string }
> = {
    info: {
        icon: <InfoIcon className="h-5 w-5" />,
        accent: 'text-sky-600',
    },
    feature: {
        icon: <CheckCircleIcon className="h-5 w-5" />,
        accent: 'text-emerald-600',
    },
    issue: {
        icon: <AlertCircleIcon className="h-5 w-5" />,
        accent: 'text-amber-500',
    },
    patch: {
        icon: <ActivityIcon className="h-5 w-5" />,
        accent: 'text-blue-500',
    },
}

export default function ReleaseNotes() {
    return (
        <section className="space-y-8">
            <div className="flex items-center gap-3">
                <div className="rounded-xl bg-sky-100 p-2.5 text-sky-600">
                    <FileTextIcon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-800">
                    Release Notes
                </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
                {releaseNotes.map((note) => {
                    const style = KIND_STYLES[note.kind]

                    return (
                        <article
                            key={note.label}
                            className="rounded-[1.5rem] border border-sky-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                        >
                            <div
                                className={`mb-4 flex items-center gap-2 ${style.accent}`}
                            >
                                {style.icon}
                                <h3 className="font-[family:var(--font-mono)] text-sm font-bold uppercase tracking-wider">
                                    {note.label}
                                </h3>
                            </div>

                            <p className="text-base font-semibold text-slate-800">
                                {note.title}
                            </p>

                            <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                {note.text}
                            </p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
