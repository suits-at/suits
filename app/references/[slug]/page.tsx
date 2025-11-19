import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { references } from "@/data/references"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return references.map((reference) => ({
    slug: reference.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const reference = references.find((r) => r.id === slug)

  if (!reference) {
    return {
      title: "Referenz nicht gefunden",
    }
  }

  return {
    title: `${reference.title} - SUITS Referenz`,
    description: `Referenzprojekt: ${reference.title} aus dem Jahr ${reference.date}`,
  }
}

export default async function ReferencePage({ params }: PageProps) {
  const { slug } = await params
  const reference = references.find((r) => r.id === slug)

  if (!reference) {
    notFound()
  }

  const isExternalUrl = reference.url.startsWith("http")

  return (
    <section>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 break-words leading-tight">
        {reference.title}
      </h1>
      <p className="text-lg text-muted-foreground mb-4">Datum: {reference.date}</p>
      {isExternalUrl ? (
        <p className="text-lg mb-8">
          Website:{" "}
          <a
            href={reference.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline break-words"
          >
            {reference.url}
          </a>
        </p>
      ) : (
        <p className="text-lg mb-8 text-muted-foreground">{reference.url}</p>
      )}
      <div className="mb-8 max-w-4xl">
        <Image
          src={reference.screenshot}
          alt={reference.title}
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />
      </div>
      <Link
        href="/#referenzen"
        className="inline-block text-lg hover:underline hover:text-primary transition-colors"
      >
        ← zurück zu den Referenzen
      </Link>
    </section>
  )
}
