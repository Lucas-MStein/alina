import Image from 'next/image'
import BackLink from '@/components/BackLink'
import StatusBadge from '@/components/StatusBadge'
import TermsFooter from '@/components/TermsFooter'
import TopNav from '@/components/TopNav'
import { CheckCircleIcon, ImageIcon } from '@/components/Icons'
import { galleryImages } from '@/lib/content'

export default function GalleryPage() {
    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[#FAFCFF] pb-24 md:pb-0">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-sky-100/50 blur-[120px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-10%] top-[20%] h-[40%] w-[40%] rounded-full bg-blue-50/60 blur-[100px]"
            />

            <TopNav />

            <main className="relative z-10 mx-auto max-w-6xl space-y-16 px-4 py-8 sm:px-6 md:py-12 lg:px-8">
                <div className="space-y-8">
                    <BackLink />

                    <section className="space-y-6 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/50 bg-sky-100/50 px-3 py-1 font-[family:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-sky-700">
                            Module · Gallery
                        </div>

                        <h1 className="text-5xl font-extrabold tracking-tighter text-slate-900 sm:text-6xl md:text-7xl">
                            Visual{' '}
                            <span className="bg-gradient-to-br from-sky-400 to-blue-600 bg-clip-text text-transparent">
                                Logs
                            </span>
                        </h1>

                        <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-slate-500 sm:text-lg">
                            Eine kleine Sammlung an Assets aus unserer gemeinsamen Zeit —
                            automatisch gebündelt, manuell mit Herz kuratiert.
                        </p>
                    </section>
                </div>

                <section className="space-y-8">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-sky-100 p-2.5 text-sky-600">
                                <ImageIcon className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                                Asset Bundle
                            </h2>
                        </div>

                        <StatusBadge tone="success" icon={<CheckCircleIcon className="h-2.5 w-2.5" />}>
                            {galleryImages.length} files
                        </StatusBadge>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {galleryImages.map((image, index) => {
                            const filename = image.src.split('/').pop() ?? image.src

                            return (
                                <article
                                    key={image.src}
                                    className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-sky-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_8px_30px_-12px_rgba(14,165,233,0.3)]"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden bg-sky-50">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            priority={index < 3}
                                            className="object-cover transition duration-500 group-hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />

                                        <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-white/60 bg-white/80 px-2 py-1 font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-wider text-slate-600 backdrop-blur">
                                            <span aria-hidden="true">›</span>
                                            {filename}
                                        </div>
                                    </div>

                                    <div className="flex flex-1 flex-col gap-3 p-5">
                                        <div className="flex items-center gap-2 font-[family:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                            <span>IMG_{String(index + 1).padStart(2, '0')}</span>
                                            <span aria-hidden="true" className="text-slate-300">
                                                ·
                                            </span>
                                            <span>Asset</span>
                                        </div>

                                        <h3 className="text-lg font-semibold text-slate-800">
                                            {image.title}
                                        </h3>

                                        <p className="text-sm leading-relaxed text-slate-500">
                                            {image.description}
                                        </p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </section>
            </main>

            <TermsFooter />
        </div>
    )
}
