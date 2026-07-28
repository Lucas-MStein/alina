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
        alt: 'Nagelstudio',
        title: '💅🏼',
        description: 'Nagelstudio. Cool.',
    },
    {
        src: '/photos/photo-5.jpg',
        alt: 'Decke',
        title: 'Was ne Decke!',
        description: 'Da wirkst du ganz klein.',
    },
    {
        src: '/photos/photo-6.jpg',
        alt: 'Super Grimasse',
        title: '🤪',
        description: 'Da siehst du super aus. Wie immer.',
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
        text: 'Bug wird noch untersucht. Bester Workaround: Tee, Pausen & atmen.',
    },
    {
        kind: 'patch',
        label: 'Patch Note',
        title: 'System-Überraschung.',
        text: 'Diese Seite versucht, dich digital zu überraschen.',
    },
]

export type ModuleKey = 'gallery' | 'quiz' | 'letter' | 'surprise'

export type ModuleDefinition = {
    key: ModuleKey
    icon: 'image' | 'brain' | 'message' | 'gift'
    title: string
    description: string
    href?: string
    action?: 'scroll'
}

export const modules: ModuleDefinition[] = [
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
]

export const quizQuestions = [
    {
        question: 'Was ist mein Lieblingssatz?',
        answers: [
            'Das muss ja ragebait sein',
            'Es gibt für alles ein erstes Mal',
            'Setz dich einfach auf mein Gesicht',
            'Alles irgenwie',
        ],
        correctIndex: 3,
    },
    {
        question: 'Wer ist der GOAT im Basketball?',
        answers: [
            'Michael Jordan',
            'Kobe Bryant',
            'LeBron James',
            'James Harden',
        ],
        correctIndex: 2,
    },
    {
        question: 'Wer ist mein Lieblingscharakter aus den Star Wars Filmen?',
        answers: [
            'Padme Amidala',
            'Obi-Wan Kenobi',
            'Luke Skywalker',
            'Darth Vader',
        ],
        correctIndex: 1,
    },
    {
        question: 'Wer ist mein all-time favorite US-Künstler?',
        answers: [
            'Kanye West',
            'Travis Scott',
            '21 Savage',
            'Drake',
        ],
        correctIndex: 0,
    },
    {
        question: 'Was esse ich am liebsten?',
        answers: [
            'Spinat',
            'Burger',
            'Maultaschen',
            'Pizza',
        ],
        correctIndex: 2,
    },
    {
        question: 'Wann sind wir auf Hinge gematcht?',
        answers: ['22.03.26', '23.03.26', '24.03.26', '25.03.26'],
        correctIndex: 0,
    },
    {
        question: 'Wo waren wir am 03. Mai 2026?',
        answers: [
            'in Calw',
            'in Heidelberg',
            'in Mosbach',
            'Auschließlich in Hemsbach',
        ],
        correctIndex: 1,
    },
    {
        question: 'Warum sind wir nicht in die Therme in Bad Liebenzell gegangen?',
        answers: [
            'Mein Auto war kaputt',
            'Ich darf keine anderen Frauen im Bikini sehen',
            'Hatte geschlossen',
            'Zu teuer',
        ],
        correctIndex: 3,
    },
    {
        question: 'Wer braucht länger, um sich fertig zu machen?',
        answers: [
            'Lucas',
            'swish41',
            'Alinas Freund',
            'prodatlucas',
        ],
        correctIndex: 0,
    },
    {
        question: 'Warum ist dein 23. Geburtstag besonders?',
        answers: [
            'Es ist dein erster Geburtstag mit mir zusammen',
            'Es ist eine legendäre Rückennummer im Basketball',
            'Es wird dein letzter sein 🫪',
            'Drakes neues Album hat genau 23 Tracks',
        ],
        correctIndex: 1,
    },
]