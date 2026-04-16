// app/page.tsx
import Countdown from '@/components/Countdown'
import { memories } from '@/lib/content'

export default function Home() {
  return (
      <main className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white text-zinc-800">
        <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-rose-500">Für Mia</p>
          <h1 className="mt-4 text-5xl font-bold sm:text-7xl">Alles Gute zum Geburtstag ✨</h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600">
            Eine kleine Reise durch unsere schönsten Momente.
          </p>

          <Countdown target="2026-08-14T00:00:00+02:00" />

          <a
              href="#moments"
              className="mt-10 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
          >
            Überraschung starten
          </a>
        </section>

        <section id="moments" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-semibold">Unsere Momente</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {memories.map((memory) => (
                <article key={memory.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <p className="text-sm text-rose-500">{memory.year}</p>
                  <h3 className="mt-2 text-xl font-semibold">{memory.title}</h3>
                  <p className="mt-3 text-zinc-600">{memory.text}</p>
                </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="rounded-3xl bg-zinc-900 p-8 text-white">
            <h2 className="text-3xl font-semibold">Ein Brief für dich</h2>
            <p className="mt-4 leading-8 text-white/80">
              Hier schreibst du deinen persönlichen Text – lieber ehrlich, konkret und ein bisschen
              „inside joke“ als generisch.
            </p>
          </div>
        </section>
      </main>
  )
}