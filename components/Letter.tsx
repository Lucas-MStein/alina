type LetterProps = {
    title: string
    text: string[]
}

export default function Letter({ title, text }: LetterProps) {
    return (
        <section className="rounded-[2rem] border border-sky-100 bg-white p-8 shadow-sm sm:p-10">
            <p className="font-[family:var(--font-mono)] text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
                Brief
            </p>

            <h2 className="mt-3 font-[family:var(--font-heading)] text-4xl font-semibold text-slate-900">
                {title}
            </h2>

            <div className="mt-6 space-y-5 text-left leading-8 text-slate-700">
                {text.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </section>
    )
}