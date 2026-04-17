import Link from 'next/link'
import Image from 'next/image'
import { galleryImages } from '@/lib/content'

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-white px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-sky-600">
                        Galerie
                    </p>

                    <h1 className="mt-4 font-[family:var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-6xl">
                        Unsere schönsten Bilder
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        Eine kleine Sammlung von Momenten, die in Erinnerung bleiben.
                    </p>

                    <Link
                        href="/"
                        className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
                    >
                        Zurück zur Startseite
                    </Link>
                </div>

                <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryImages.map((image) => (
                        <article
                            key={image.src}
                            className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            <div className="p-5">
                                <h2 className="text-xl font-semibold text-slate-900">
                                    {image.title}
                                </h2>
                                <p className="mt-2 leading-7 text-slate-600">{image.description}</p>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    )
}