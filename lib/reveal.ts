export const REVEAL_DATES = {
    heroButtons: '2026-07-20T18:00:00+02:00',
    memories: '2026-07-24T18:00:00+02:00',
    letter: '2026-07-30T18:00:00+02:00',
    surprise: '2026-08-04T00:00:00+02:00',
} as const

export function isUnlocked(dateString: string) {
    return new Date().getTime() >= new Date(dateString).getTime()
}

export function formatGermanDate(dateString: string) {
    return new Intl.DateTimeFormat('de-DE', {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(new Date(dateString))
}