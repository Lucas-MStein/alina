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
    title: 'Alles Gute zum Geburtstag',
    description: 'Eine kleine Geburtstags-Überraschung',
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