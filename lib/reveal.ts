export const REVEAL_DATES = {
    gallery: '2026-07-22T18:00:00+02:00',
    quiz: '2026-07-26T18:00:00+02:00',
    letter: '2026-07-30T18:00:00+02:00',
    surprise: '2026-08-04T00:00:00+02:00',
} as const

export type RevealKey = keyof typeof REVEAL_DATES

const DEV_UNLOCK_OVERRIDES: Record<RevealKey, boolean> = {
    gallery: true,
    quiz: false,
    letter: true,
    surprise: false,
}

export function isUnlocked(key: RevealKey, dateString: string) {
    const isDevelopment = process.env.NODE_ENV === 'development'

    if (isDevelopment && DEV_UNLOCK_OVERRIDES[key]) {
        return true
    }

    return new Date().getTime() >= new Date(dateString).getTime()
}

export function formatGermanDate(dateString: string) {

    return new Intl.DateTimeFormat('de-DE', {

        dateStyle: 'medium',

        timeStyle: 'short',

        timeZone: 'Europe/Berlin',

    }).format(new Date(dateString))

}