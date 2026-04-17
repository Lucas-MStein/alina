type LetterProps = {
    title: string
    text: string[]
}

export default function Letter({ title, text }: LetterProps) {
    return (
        <section className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-600">Brief</p>

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