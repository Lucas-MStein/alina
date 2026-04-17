import { formatGermanDate } from '@/lib/reveal'

type LockedSectionProps = {
    unlocked: boolean
    unlockDate: string
    title?: string
    description?: string
    children: React.ReactNode
    className?: string
    variant?: 'default' | 'compact'
}

export default function LockedSection({
                                          unlocked,
                                          unlockDate,
                                          title = 'Noch gesperrt',
                                          description,
                                          children,
                                          className = '',
                                          variant = 'default',
                                      }: LockedSectionProps) {
    if (unlocked) {
        return <>{children}</>
    }

    if (variant === 'compact') {
        return (
            <div className={className}>
                <div className="flex min-h-[72px] items-center justify-center rounded-full border border-sky-200 bg-white/90 px-6 text-center shadow-sm ring-1 ring-slate-200">
                    <div>
                        <p className="text-lg font-semibold text-slate-900">{title}</p>
                        <p className="mt-1 text-sm text-slate-600">
                            Freischaltung am{' '}
                            <span className="font-medium text-slate-900">
                {formatGermanDate(unlockDate)}
              </span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={className}>
            <div className="relative overflow-hidden rounded-[2rem] border border-sky-200 bg-white/70 shadow-sm ring-1 ring-slate-200">
                <div className="pointer-events-none select-none blur-[3px] opacity-35">
                    {children}
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <div className="mx-6 max-w-md rounded-[1.5rem] border border-sky-200 bg-white/90 px-6 py-5 text-center shadow-lg">
                        <div className="text-3xl">🔒</div>

                        <h3 className="mt-3 text-xl font-semibold text-slate-900">
                            {title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            {description ?? (
                                <>
                                    Dieser Bereich wird am{' '}
                                    <span className="font-medium text-slate-900">
                    {formatGermanDate(unlockDate)}
                  </span>{' '}
                                    freigeschaltet.
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}