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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {memories.map((memory) => (
                <article
                    key={`${memory.year}-${memory.title}`}
                    className="group rounded-3xl border border-sky-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md"
                >
                    <div className="mb-5 flex items-center justify-between">
                        <span className="rounded-md border border-sky-100 bg-sky-50 px-2.5 py-1 font-[family:var(--font-mono)] text-xs font-bold text-sky-700">
                            {memory.year}
                        </span>
                        <span className="font-[family:var(--font-mono)] text-[9px] font-bold uppercase tracking-widest text-slate-400">
                            archived memory
                        </span>
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-slate-800 transition-colors group-hover:text-sky-600">
                        {memory.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600">
                        {memory.text}
                    </p>
                </article>
            ))}
        </div>
    )
}
