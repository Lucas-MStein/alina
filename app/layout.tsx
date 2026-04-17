import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-heading',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://alinaist23.de'),
    title: 'Alles Gute zum Geburtstag 💙',
    description: 'Eine kleine digitale Überraschung voller Erinnerungen, lieber Worte und besonderer Momente.',
    openGraph: {
        title: 'Alles Gute zum Geburtstag 💙',
        description:
            'Eine kleine digitale Überraschung voller Erinnerungen, lieber Worte und besonderer Momente.',
        url: 'https://alinaist23.de',
        siteName: 'Geburtstags-Überraschung',
        locale: 'de_DE',
        type: 'website',
        images: [
            {
                url: '/opengraph-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Geburtstags-Überraschung in Blau',
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
        <html lang="de">
        <body
            className={`${playfair.variable} ${inter.variable} bg-slate-50 text-slate-800 antialiased`}
        >
        {children}
        </body>
        </html>
    )
}