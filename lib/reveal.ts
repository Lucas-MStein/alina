export const REVEAL_DATES = {
    heroButtons: '2026-07-20T18:00:00+02:00',
    memories: '2026-07-24T18:00:00+02:00',
    letter: '2026-07-30T18:00:00+02:00',
    surprise: '2026-08-04T00:00:00+02:00',
} as const

const DEV_UNLOCK_OVERRIDES = {
    heroButtons: false,
    memories: true,
    letter: true,
    surprise: true,
} as const

export type RevealKey = keyof typeof REVEAL_DATES

export function isUnlocked(key: RevealKey, dateString: string) {
    if (DEV_UNLOCK_OVERRIDES[key]) return true
    return new Date().getTime() >= new Date(dateString).getTime()
}

export function formatGermanDate(dateString: string) {
    return new Intl.DateTimeFormat('de-DE', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Europe/Berlin',
    }).format(new Date(dateString))
}