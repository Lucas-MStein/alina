export const memories = [
    {
        year: 'Der Anfang',
        title: 'Unser erstes richtig schönes Treffen',
        text: 'Ich weiß noch genau, wie besonders sich dieser Tag angefühlt hat. Seitdem gibt es so viele Momente, an die ich immer wieder gerne zurückdenke.',
    },
    {
        year: 'Ein Lieblingsmoment',
        title: 'Die kleinen Dinge mit dir',
        text: 'Mit dir sind selbst normale Tage irgendwie schöner, leichter und einfach besonderer.',
    },
    {
        year: 'Was ich an dir mag',
        title: 'Deine Art',
        text: 'Ich mag an dir, dass du auf deine ganz eigene Weise Ruhe, Wärme und Freude mitbringst. Genau das macht dich für mich so besonders.',
    },
    {
        year: 'Heute',
        title: 'Dein Tag',
        text: 'Heute geht es nur um dich. Und diese kleine Seite soll dir zeigen, wie wichtig du mir bist.',
    },
]

export const letterText = [
    'Alles Gute zum Geburtstag, Alina.',
    'Ich wollte dir nicht einfach nur gratulieren, sondern dir etwas machen, das persönlicher ist und nur für dich gedacht ist.',
    'Du bist ein Mensch, der auf eine ganz besondere Art wundervoll, liebevoll und einzigartig ist. Und ich bin sehr dankbar für die Zeit mit dir und für all die Erinnerungen, die wir teilen.',
    'Ich wünsche dir für dein neues Lebensjahr ganz viel Glück, Gesundheit, schöne Überraschungen und vor allem viele Momente, in denen du genauso strahlst wie heute.',
    'Bleib bitte genauso wundervoll, wie du bist. 💙',
]

export const galleryImages = [
    {
        src: '/photos/photo-1.jpg',
        alt: 'Airpods Max',
        title: 'Maximale Freude 🎧',
        description: 'Ein sehr episches Unboxing.',
    },
    {
        src: '/photos/photo-2.jpg',
        alt: 'Eines der ersten gemeinsamen Bilder',
        title: 'Smile!',
        description: 'So hat es angefangen.',
    },
    {
        src: '/photos/photo-3.jpg',
        alt: 'Lustiger Blick',
        title: '40€ für Sitzplatzreservierung?',
        description: 'Das ist selbst mir zu teuer.',
    },
    {
        src: '/photos/photo-4.jpg',
        alt: 'Schwäne',
        title: 'Erinnerst du dich daran?',
        description: 'Us in another universe.',
    },
    {
        src: '/photos/photo-5.jpg',
        alt: 'Lächelnder besonderer Moment',
        title: 'Ein Herzensmoment',
        description: 'Einer dieser Erinnerungen, die man nie vergisst.',
    },
    {
        src: '/photos/photo-6.jpg',
        alt: 'Schönes persönliches Bild',
        title: 'Heute und für immer',
        description: 'Eine kleine Galerie für einen besonderen Menschen.',
    },
]

export type ReleaseNote = {
    kind: 'info' | 'feature' | 'issue' | 'patch'
    label: string
    title: string
    text: string
}

export const releaseNotes: ReleaseNote[] = [
    {
        kind: 'info',
        label: 'Version Info',
        title: 'Version 23.0',
        text: 'Geplantes Release: 04.08.2026 · Build läuft im Hintergrund.',
    },
    {
        kind: 'feature',
        label: 'Top Feature',
        title: 'Alina bleibt Alina.',
        text: 'Das Kernsystem läuft stabil, charmant und fehlerfrei weiter.',
    },
    {
        kind: 'issue',
        label: 'Known Issue',
        title: 'Manchmal ist alles etwas viel.',
        text: 'Bug wird noch untersucht. Bester Workaround: Kaffee, Pausen & atmen.',
    },
    {
        kind: 'patch',
        label: 'Patch Note',
        title: 'System-Erleichterung.',
        text: 'Diese Seite versucht, alles ein kleines bisschen leichter zu machen.',
    },
]

export type ModuleKey =
    | 'memories'
    | 'gallery'
    | 'quiz'
    | 'letter'
    | 'surprise'
    | 'terms'

export type ModuleDefinition = {
    key: ModuleKey
    icon:
        | 'database'
        | 'image'
        | 'brain'
        | 'message'
        | 'gift'
        | 'file'
    title: string
    description: string
    href?: string
    action?: 'scroll' | 'terms'
}

export const modules: ModuleDefinition[] = [
    {
        key: 'memories',
        icon: 'database',
        title: 'Erinnerungen',
        description: 'Ein kleines Archiv unserer schönsten Momente.',
        action: 'scroll',
    },
    {
        key: 'gallery',
        icon: 'image',
        title: 'Galerie',
        description: 'Visuelle Logs unserer gemeinsamen Zeit.',
        href: '/gallery',
    },
    {
        key: 'quiz',
        icon: 'brain',
        title: 'Quiz',
        description: 'Ein kleines Quiz über uns — mit dem ein oder anderen Easter Egg.',
        href: '/quiz',
    },
    {
        key: 'letter',
        icon: 'message',
        title: 'Brief',
        description: 'Eine längere Textdatei — verschlüsselt bis zum Release.',
        action: 'scroll',
    },
    {
        key: 'surprise',
        icon: 'gift',
        title: 'Surprise',
        description: 'Ein undokumentiertes Feature. Wird pünktlich zum Release ausgeliefert.',
        action: 'scroll',
    },
    {
        key: 'terms',
        icon: 'file',
        title: 'AGB',
        description: 'Allgemeine Beziehungsbedingungen. Bitte bei Gelegenheit lesen.',
        action: 'terms',
    },
]

export const quizQuestions = [
    {
        question: 'Welcher Moment passt am besten zu uns?',
        answers: [
            'Ein perfekter Plan, der genau so umgesetzt wird',
            'Ein schöner Moment, der spontan besonders wird',
            'Nur Stress und zu wenig Zeit',
            'Nichts davon',
        ],
        correctIndex: 1,
    },
    {
        question: 'Was macht gemeinsame Zeit mit dir für mich besonders?',
        answers: [
            'Weil alles dadurch leichter und schöner wirkt',
            'Weil man dabei produktiver ist',
            'Weil dann weniger los ist',
            'Weil es einfach zufällig nett ist',
        ],
        correctIndex: 0,
    },
    {
        question: 'Was beschreibt dich am besten?',
        answers: ['Chaotisch', 'Besonders, liebevoll und einzigartig', 'Immer ernst', 'Ganz still und unnahbar'],
        correctIndex: 1,
    },
    {
        question: 'Worum geht es auf dieser Website eigentlich?',
        answers: [
            'Um irgendein Designprojekt',
            'Um eine kleine digitale Überraschung für dich',
            'Um ein Testprojekt für Next.js',
            'Um einen Zufall',
        ],
        correctIndex: 1,
    },
]