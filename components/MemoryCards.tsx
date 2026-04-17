type Memory = {
    year: string
    title: string
    text: string
}

type MemoryCardsProps = {
    memories: Memory[]
}

export default function MemoryCards({ memories }: MemoryCardsProps) {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {memories.map((memory) => (
                <article
                    key={`${memory.year}-${memory.title}`}
                    className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
                >
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">
                        {memory.year}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                        {memory.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">{memory.text}</p>
                </article>
            ))}
        </div>
    )
}