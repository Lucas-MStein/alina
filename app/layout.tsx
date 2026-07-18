import type { Metadata } from 'next'
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google'
import TermsProvider from '@/components/TermsProvider'
import './globals.css'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-heading',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://alinaist23.de'),
    title: 'Alina 23.0 — alinaist23.de',
    description:
        'Ein kleines digitales Update mit Erinnerungen, Nachrichten und Dingen, die ich dir nicht einfach nur per WhatsApp schicken wollte.',
    openGraph: {
        title: 'Alina 23.0 — alinaist23.de',
        description:
            'Ein kleines digitales Update mit Erinnerungen, Nachrichten und Dingen, die ich dir nicht einfach nur per WhatsApp schicken wollte.',
        url: 'https://alinaist23.de',
        siteName: 'alinaist23.de',
        locale: 'de_DE',
        type: 'website',
        images: [
            {
                url: '/opengraph-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Alina 23.0 — Release Dashboard',
            },
        ],
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="de" data-scroll-behavior="smooth">
        <body
            className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} bg-[#FAFCFF] text-slate-800 antialiased selection:bg-sky-200 selection:text-sky-900`}
        >
        <TermsProvider>{children}</TermsProvider>
        </body>
        </html>
    )
}
